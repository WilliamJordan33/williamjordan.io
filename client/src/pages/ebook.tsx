import { useEffect } from "react";
import SimpleNavigation from "@/components/simple-navigation";
import Footer from "@/components/footer";

export default function EbookPage() {
  useEffect(() => {
    // Set meta tags for social sharing
    document.title = "Free E-Book: NO-CODE MASTERY | William Jordan";
    
    // Remove existing meta tags if they exist
    const existingDescription = document.querySelector('meta[name="description"]');
    const existingOgTitle = document.querySelector('meta[property="og:title"]');
    const existingOgDescription = document.querySelector('meta[property="og:description"]');
    const existingOgImage = document.querySelector('meta[property="og:image"]');
    const existingTwitterCard = document.querySelector('meta[name="twitter:card"]');
    const existingTwitterImage = document.querySelector('meta[name="twitter:image"]');
    
    if (existingDescription) existingDescription.remove();
    if (existingOgTitle) existingOgTitle.remove();
    if (existingOgDescription) existingOgDescription.remove();
    if (existingOgImage) existingOgImage.remove();
    if (existingTwitterCard) existingTwitterCard.remove();
    if (existingTwitterImage) existingTwitterImage.remove();
    
    // Add new meta tags
    const metaTags = [
      { name: "description", content: "Download the complete guide to mastering no-code web development using AI tools like VS Code and GitHub Copilot. Build full-stack applications without traditional coding." },
      { property: "og:title", content: "Free E-Book: NO-CODE MASTERY | William Jordan" },
      { property: "og:description", content: "Download the complete guide to mastering no-code web development using AI tools like VS Code and GitHub Copilot. Build full-stack applications without traditional coding." },
      { property: "og:image", content: `${window.location.origin}/no-code-mastery-ebook.png` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${window.location.origin}/no-code-mastery-ebook.png` }
    ];
    
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.name) meta.setAttribute('name', tag.name);
      if (tag.property) meta.setAttribute('property', tag.property);
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SimpleNavigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-6">Free E-Book: NO-CODE MASTERY</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Download the complete guide to mastering no-code web development using AI tools like VS Code and GitHub Copilot. 
              Build full-stack applications without traditional coding.
            </p>
            <img 
              src="/no-code-mastery-ebook.png" 
              alt="No-Code Mastery E-book Cover" 
              className="max-w-sm w-full h-auto mx-auto mb-8 rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-6">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSeC7FOqd7RO9S9agCV91SU4R3nCIFtdyrS7z9LrtrlaAl4vmw/viewform?embedded=true" 
              width="100%" 
              height="800" 
              style={{ border: 0 }}
              title="No-Code Mastery E-book Download Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
