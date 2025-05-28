export default function About() {
  return (
    <div className="flex justify-center items-center h-screen w-screen text-white overflow-hidden">
      <div className="flex flex-col justify-start w-1/2 m-32">
        <p className="font-bold text-4xl text-violet-400">About Me</p>
        <p className="text-xl mt-4">
          {/* I&apos;m Derek Mo, a software engineer and full-stack developer with a
          deep appreciation for crafting user-focused web applications. I&apos;m
          currently an undergraduate research assistant at the University of
          Florida&apos;s ELX Lab, where I contribute to projects at the
          intersection of education, technology, and user experience. My journey
          into software development has been driven by an enduring curiosity and
          a commitment to creating solutions that are both intuitive and
          impactful. Whether it&apos;s designing seamless front-end interfaces,
          developing robust backend architectures, or collaborating on
          innovative research projects, I find excitement in problem-solving and
          continuous growth. Outside of work, I&apos;m a lifelong learner who enjoys
          playing guitar, exploring local cafes, and spending time with my cat.
          I&apos;m passionate about combining creativity and logic to bring ideas to
          life, and I&apos;m always looking forward to new challenges that broaden my
          perspective and sharpen my skills. */}
          I&apos;m Derek Mo, a software engineer and full-stack developer currently
          working as an undergraduate research assistant at the University of
          Florida&apos;s ELX Lab. I enjoy building user-focused web applications,
          exploring innovative technologies, and solving complex problems. I&apos;m
          also passionate about game development, where I enjoy designing
          mechanics and coding gameplay systems. I take pride in
          balancing technical precision with creative problem-solving, and I
          thrive on tackling new challenges that push the limits of what I can
          build. In my free time, I enjoy practicing guitar, playing volleyball 
          and spending time with my cat.
        </p>
      </div>
      <div className="flex justify-center w-1/2">
        {/* <Image
                        src="/33-DerekMo2.JPEG"
                        alt="Profile"
                        width={192}
                        height={192}
                        className="rounded-lg w-fit h-full mt-4 mb-4"
                /> */}
        <i>A</i>
        <i>B</i>
        <i>C</i>
      </div>
    </div>
  );
}
