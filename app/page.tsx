import { Contact, Project, About, Blog } from "./components";

export default function Home() {
  return (
    <div>
      <Blog />
      <About />
      <Project />
      <Contact />
    </div>
  );
}
