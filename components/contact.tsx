import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      title: "Email",
      value: "kahonbintezaman@gmail.com",
      link: "mailto:kahonbintezaman@gmail.com",
      icon: <Mail className="text-primary" size={20} />,
    },
    {
      title: "Location",
      value: "Noakhali, Bangladesh",
      link: null,
      icon: <MapPin className="text-primary" size={20} />,
    },
    {
      title: "GitHub",
      value: "github.com/kaho0",
      link: "https://github.com/kaho0",
      icon: <Github className="text-primary" size={20} />,
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/kahon-binte-zaman-9414432b4",
      link: "https://www.linkedin.com/in/kahon-binte-zaman-9414432b4/",
      icon: <Linkedin className="text-primary" size={20} />,
    },
    {
      title: "Twitter",
      value: "x.com/Kahoo_z",
      link: "https://x.com/Kahoo_z",
      icon: <Twitter className="text-primary" size={20} />,
    },
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold font-heading mb-6 text-primary">Get In Touch</h2>

      <div className="bg-secondary/50 p-8 rounded-lg border border-primary/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1">{item.icon}</div>
              <div>
                <h3 className="text-lg font-medium">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith("mailto:") || item.link.startsWith("tel:") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-muted-foreground">{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
