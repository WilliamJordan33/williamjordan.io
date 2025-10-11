import { Button } from "@/components/ui/button";
import SimpleNavigation from "@/components/simple-navigation";
import Footer from "@/components/footer";

export default function EbookPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SimpleNavigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <img 
            src="/no-code-mastery-ebook.png" 
            alt="No-Code Mastery E-book Cover" 
            className="max-w-md w-full h-auto mx-auto mb-8 rounded-lg shadow-2xl"
          />
          
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeC7FOqd7RO9S9agCV91SU4R3nCIFtdyrS7z9LrtrlaAl4vmw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-semibold"
            >
              Claim Free E-book Now
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
