interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: Array<{ label: string; href?: string }>;
}

export function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <section className="text-white py-16" style={{ background: 'linear-gradient(to right, #16A34A, #0EA5E9)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <nav className="mb-4">
            <ol className="flex items-center space-x-2 text-white/80">
              {breadcrumb.map((item, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  {item.href ? (
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
          {title}
        </h1>
        
        {description && (
          <p className="text-xl text-white/90 max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

