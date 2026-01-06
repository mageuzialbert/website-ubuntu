import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { query } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form data
    const userType = formData.get('userType') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const organization = formData.get('organization') as string;
    const message = formData.get('message') as string;
    
    // Healthcare specific fields
    const facilityType = formData.get('facilityType') as string;
    const healthcareRegionId = formData.get('healthcareRegion') as string;
    const healthcareDistrictId = formData.get('healthcareDistrict') as string;
    const solutionsInterested = formData.get('solutionsInterested') as string;
    
    // Investor specific fields
    const collaborationType = formData.get('collaborationType') as string;
    
    // Talent specific fields
    const areaOfExpertise = formData.get('areaOfExpertise') as string;
    const yearsOfExperience = formData.get('yearsOfExperience') as string;
    const regionId = formData.get('region') as string;
    const districtId = formData.get('district') as string;
    const cvFile = formData.get('cvFile') as File | null;

    // Validate CV file size (max 5MB)
    if (cvFile && cvFile.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'CV file size exceeds 5MB limit' },
        { status: 400 }
      );
    }

    // Fetch region and district names for talent if provided
    let regionName = '';
    let districtName = '';
    if (regionId) {
      try {
        const regionResult = await query<{ name: string }>(
          'SELECT name FROM regions WHERE id = ?',
          [regionId]
        );
        if (regionResult.length > 0) {
          regionName = regionResult[0].name;
        }
      } catch (error) {
        console.error('Error fetching region name:', error);
      }
    }
    if (districtId) {
      try {
        const districtResult = await query<{ name: string }>(
          'SELECT name FROM districts WHERE id = ?',
          [districtId]
        );
        if (districtResult.length > 0) {
          districtName = districtResult[0].name;
        }
      } catch (error) {
        console.error('Error fetching district name:', error);
      }
    }

    // Fetch region and district names for healthcare if provided
    let healthcareRegionName = '';
    let healthcareDistrictName = '';
    if (healthcareRegionId) {
      try {
        const regionResult = await query<{ name: string }>(
          'SELECT name FROM regions WHERE id = ?',
          [healthcareRegionId]
        );
        if (regionResult.length > 0) {
          healthcareRegionName = regionResult[0].name;
        }
      } catch (error) {
        console.error('Error fetching healthcare region name:', error);
      }
    }
    if (healthcareDistrictId) {
      try {
        const districtResult = await query<{ name: string }>(
          'SELECT name FROM districts WHERE id = ?',
          [healthcareDistrictId]
        );
        if (districtResult.length > 0) {
          healthcareDistrictName = districtResult[0].name;
        }
      } catch (error) {
        console.error('Error fetching healthcare district name:', error);
      }
    }

    // Validate required fields
    if (!userType || !firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate user type specific fields
    if (userType === 'healthcare' && (!facilityType || !healthcareRegionId || !healthcareDistrictId || !solutionsInterested)) {
      return NextResponse.json(
        { error: 'Missing required healthcare facility fields (facility type, region, district, and solutions interested are required)' },
        { status: 400 }
      );
    }

    if (userType === 'investor' && (!organization || !collaborationType)) {
      return NextResponse.json(
        { error: 'Missing required investor/partner fields' },
        { status: 400 }
      );
    }

    if (userType === 'talent' && (!areaOfExpertise || !yearsOfExperience || !regionId || !districtId)) {
      return NextResponse.json(
        { error: 'Missing required talent fields (area of expertise, years of experience, region, and district are required)' },
        { status: 400 }
      );
    }

    // Create transporter using Titan email SMTP settings
    const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.titan.email',
  port: Number(process.env.SMTP_PORT || 465),
  secure: true, // true for 465
  auth: {
    user: process.env.EMAIL_USER as string,    // set this too in Vercel
    pass: process.env.EMAIL_PASS as string,    // your Vercel env var
  },
});

    // Generate user type specific content
    const getUserTypeLabel = (type: string) => {
      switch (type) {
        case 'healthcare': return 'Healthcare Facility';
        case 'investor': return 'Investor / Partner';
        case 'talent': return 'Talent';
        default: return 'Unknown';
      }
    };

    const getUserTypeSpecificContent = () => {
      switch (userType) {
        case 'healthcare':
          return `
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
              <h3 style="color: #0c4a6e; margin-top: 0;">Healthcare Facility Details</h3>
              <p><strong>Facility Type:</strong> ${facilityType}</p>
              ${healthcareRegionName ? `<p><strong>Region:</strong> ${healthcareRegionName}</p>` : ''}
              ${healthcareDistrictName ? `<p><strong>District:</strong> ${healthcareDistrictName}</p>` : ''}
              <p><strong>Solutions Interested In:</strong> ${solutionsInterested ? JSON.parse(solutionsInterested).join(', ') : 'Not specified'}</p>
            </div>
          `;
        case 'investor':
          return `
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #22c55e;">
              <h3 style="color: #14532d; margin-top: 0;">Partnership Details</h3>
              <p><strong>Collaboration Type:</strong> ${collaborationType}</p>
            </div>
          `;
        case 'talent':
          return `
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <h3 style="color: #92400e; margin-top: 0;">Talent Details</h3>
              <p><strong>Area of Expertise:</strong> ${areaOfExpertise}</p>
              <p><strong>Years of Experience:</strong> ${yearsOfExperience}</p>
              ${regionName ? `<p><strong>Region:</strong> ${regionName}</p>` : ''}
              ${districtName ? `<p><strong>District:</strong> ${districtName}</p>` : ''}
              ${cvFile ? `<p><strong>CV Uploaded:</strong> ${cvFile.name} (${(cvFile.size / 1024 / 1024).toFixed(2)} MB)</p>` : ''}
            </div>
          `;
        default:
          return '';
      }
    };

    // Prepare CV file attachment if provided
    let cvAttachment: { filename: string; content: Buffer; contentType: string } | null = null;
    if (cvFile) {
      try {
        const fileBuffer = Buffer.from(await cvFile.arrayBuffer());
        cvAttachment = {
          filename: cvFile.name,
          content: fileBuffer,
          contentType: cvFile.type || 'application/pdf'
        };
      } catch (fileError) {
        console.error('Error processing CV file:', fileError);
        // Continue without attachment if file processing fails
      }
    }

    // Email content
    const mailOptions = {
      from: 'info@ubuntuafyalink.co.tz',
      to: 'info@ubuntuafyalink.co.tz',
      subject: `New ${getUserTypeLabel(userType)} Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New ${getUserTypeLabel(userType)} Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Details</h3>
            <p><strong>User Type:</strong> ${getUserTypeLabel(userType)}</p>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
          </div>
          
          ${getUserTypeSpecificContent()}
          
          ${message ? `
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #374151;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f1f5f9; border-radius: 8px; font-size: 14px; color: #64748b;">
            <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { 
              timeZone: 'Africa/Dar_es_Salaam',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })} (EAT)</p>
            <p><strong>Source:</strong> Ubuntu AfyaLink Website Contact Form</p>
          </div>
        </div>
      `,
      text: `
New ${getUserTypeLabel(userType)} Contact Form Submission

User Type: ${getUserTypeLabel(userType)}
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
${organization ? `Organization: ${organization}` : ''}

${userType === 'healthcare' ? `
Healthcare Facility Details:
- Facility Type: ${facilityType}
${healthcareRegionName ? `- Region: ${healthcareRegionName}` : ''}
${healthcareDistrictName ? `- District: ${healthcareDistrictName}` : ''}
- Solutions Interested In: ${solutionsInterested ? JSON.parse(solutionsInterested).join(', ') : 'Not specified'}
` : ''}

${userType === 'investor' ? `
Partnership Details:
- Collaboration Type: ${collaborationType}
` : ''}

${userType === 'talent' ? `
Talent Details:
- Area of Expertise: ${areaOfExpertise}
- Years of Experience: ${yearsOfExperience}
${regionName ? `- Region: ${regionName}` : ''}
${districtName ? `- District: ${districtName}` : ''}
${cvFile ? `- CV Uploaded: ${cvFile.name} (${(cvFile.size / 1024 / 1024).toFixed(2)} MB)` : ''}
` : ''}

${message ? `
Message:
${message}
` : ''}

Submitted: ${new Date().toLocaleString('en-US', { 
  timeZone: 'Africa/Dar_es_Salaam',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})} (EAT)

Source: Ubuntu AfyaLink Website Contact Form
      `,
      attachments: cvAttachment ? [cvAttachment] : []
    };

    // Send email (CV file will be attached if provided)
    let emailSent = false;
    let emailSentAt: Date | null = null;
    
    try {
      await transporter.sendMail(mailOptions);
      emailSent = true;
      emailSentAt = new Date();
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Continue to save contact even if email fails
    }

    // Store contact in database
    try {
      const solutionsInterestedJson = solutionsInterested 
        ? JSON.stringify(JSON.parse(solutionsInterested))
        : null;

      // Determine region/district based on user type (same columns used for both healthcare and talent)
      const finalRegionId = userType === 'healthcare' ? healthcareRegionId : (userType === 'talent' ? regionId : null);
      const finalRegionName = userType === 'healthcare' ? healthcareRegionName : (userType === 'talent' ? regionName : '');
      const finalDistrictId = userType === 'healthcare' ? healthcareDistrictId : (userType === 'talent' ? districtId : null);
      const finalDistrictName = userType === 'healthcare' ? healthcareDistrictName : (userType === 'talent' ? districtName : '');

      await query(
        `INSERT INTO contacts (
          user_type, first_name, last_name, email, phone, organization, message,
          facility_type, region_id, region_name, district_id, district_name, solutions_interested,
          collaboration_type,
          area_of_expertise, years_of_experience,
          cv_filename, cv_file_size,
          email_sent, email_sent_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          userType,
          firstName,
          lastName,
          email,
          phone,
          organization || null,
          message || null,
          // Healthcare fields
          facilityType || null,
          finalRegionId || null,
          finalRegionName || null,
          finalDistrictId || null,
          finalDistrictName || null,
          solutionsInterestedJson,
          // Investor fields
          collaborationType || null,
          // Talent fields
          areaOfExpertise || null,
          yearsOfExperience ? parseInt(yearsOfExperience) : null,
          // CV file info (no storage, just metadata)
          cvFile ? cvFile.name : null,
          cvFile ? cvFile.size : null,
          // Email status
          emailSent,
          emailSentAt
        ]
      );
    } catch (dbError) {
      console.error('Error saving contact to database:', dbError);
      // If email was sent but DB save failed, still return success for email
      if (emailSent) {
        return NextResponse.json(
          { 
            message: 'Email sent successfully, but failed to save contact to database',
            warning: 'Contact may not be stored in database'
          },
          { status: 200 }
        );
      }
      // If both failed, throw error
      throw dbError;
    }

    return NextResponse.json(
      { message: 'Contact saved and email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
