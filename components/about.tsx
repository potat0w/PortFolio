export function About() {
  return (
    <div className="space-y-8">
      <div className="bg-secondary/50 p-8 rounded-lg border border-primary/20">
        <h2 className="text-3xl font-bold font-heading mb-6 text-primary">
          About Me:
        </h2>
        <div className="space-y-4 text-lg">
          <h3 className="text-2xl font-semibold mb-2">Hi, I'm Kahon.</h3>

          <p>
            I’m a full-stack developer passionate about building clean,
            user-focused applications. Currently, I’m learning AI and Machine
            Learning exploring data processing, model development, and ways to
            integrate intelligent systems into real projects.
           
          </p>
        </div>
      </div>

      <div className="bg-secondary/50 p-8 rounded-lg border border-primary/20">
        <h3 className="text-2xl font-bold font-heading mb-6 text-primary">
          Education
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
          <div>
            <h4 className="text-xl font-semibold">
              Bachelor of Computer Science & Telecommunication Engineering
            </h4>
            <p className="text-primary">
              Noakhali Science And Technology University
            </p>
          </div>
          <p className="text-muted-foreground mt-1 md:mt-0">
            09/2023 - 05/2027
          </p>
        </div>
      </div>
    </div>
  );
}
