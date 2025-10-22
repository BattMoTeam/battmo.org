import React from "react";
import { Button } from "@/components/Button";
import { SiGithub, SiYoutube, SiLinkedin } from "react-icons/si";
import { BookOpen } from "lucide-react";

const Footer = () => (
  <footer className="bg-footer-primary text-footer-foreground py-6">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Branding */}
        <div className="flex flex-col gap-4 items-start">
          <h2 className="text-2xl font-bold">Learn more...</h2>
          <p className="text-sm text-footer-foreground/70">
            ... about accelerating battery innovation through digital tools.
          </p>

          {/* Social Badges */}
          <div className="flex flex-wrap gap-2 mt-6 items-center">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/BattMoTeam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <SiGithub size={20} /> GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.youtube.com/@battmo5613" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <SiYoutube size={20} /> YouTube
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.linkedin.com/company/battmo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <SiLinkedin size={20} /> Linkedin
              </a>
            </Button>
          </div>
        </div>

        {/* Funding */}
        <div className="flex flex-col gap-4 items-center">
          <div className="">
            <h3 className="text-2xl font-semibold mb-2">Funding</h3>
            <p className="text-sm text-footer-foreground/80">
              This project has received funding from the European Union.
            </p>
            <img
            src="https://raw.githubusercontent.com/BattMoTeam/visual-identity/1bc87b07605d77fb3faa788c82f06ec2735ed31f/img/flag_of_europe.png"
            alt="EU Funding Logo"
            className="h-16 object-contain mt-2"
          />
          </div>
        </div>


      </div>

      {/* Optional bottom divider */}
      <div className="border-t border-footer-foreground/20 mt-12 pt-6 text-center text-sm text-footer-foreground/60">
        Built with ❤️ by the BattMo team.
        <p className="text-xs text-footer-foreground/50 mt-2">
          &copy; {new Date().getFullYear()} BattMo. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;