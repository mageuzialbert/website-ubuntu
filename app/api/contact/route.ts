import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
    const location = formData.get('location') as string;
    const solutionsInterested = formData.get('solutionsInterested') as string;
    
    // Investor specific fields
    const collaborationType = formData.get('collaborationType') as string;
    
    // Talent specific fields
    const areaOfExpertise = formData.get('areaOfExpertise') as string;
    const yearsOfExperience = formData.get('yearsOfExperience') as string;
    const cvFile = formData.get('cvFile') as File | null;

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
    if (userType === 'healthcare' && (!facilityType || !location || !solutionsInterested)) {
      return NextResponse.json(
        { error: 'Missing required healthcare facility fields' },
        { status: 400 }
      );
    }

    if (userType === 'investor' && (!organization || !collaborationType)) {
      return NextResponse.json(
        { error: 'Missing required investor/partner fields' },
        { status: 400 }
      );
    }

    if (userType === 'talent' && (!areaOfExpertise || !yearsOfExperience)) {
      return NextResponse.json(
        { error: 'Missing required talent fields' },
        { status: 400 }
      );
    }

    // Create transporter using your Titan email SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.titan.email',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'info@ubuntuafyalink.co.tz',
        pass: 'Kaihula@1998.',
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
              <p><strong>Location:</strong> ${location}</p>
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
              ${cvFile ? `<p><strong>CV Uploaded:</strong> ${cvFile.name} (${(cvFile.size / 1024 / 1024).toFixed(2)} MB)</p>` : ''}
            </div>
          `;
        default:
          return '';
      }
    };

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
- Location: ${location}
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
      attachments: cvFile ? [{
        filename: cvFile.name,
        content: Buffer.from(await cvFile.arrayBuffer()),
        contentType: cvFile.type
      }] : []
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
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
