import { BsDot } from 'react-icons/bs';

export default function Skills() {
  const skills = [
    {
      category: 'Frontend',
      items: [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'JavaScript (ES6+)',
        'TypeScript',
      ],
    },
    {
      category: 'Backend',
      items: [
        'Node.js',
        'Express.js',
        'Python',
        'Firebase',
        'MongoDB',
        'PostgreSQL',
      ],
    },
    {
      category: 'Tools & Others',
      items: [
        'Git & GitHub',
        'VS Code',
        'Figma',
        'Responsive Design',
        'UI/UX Principles',
        'Agile Methodologies',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gray-900">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-5xl font-bold text-white mb-12 font-poppins">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[280px] max-w-[400px]"
            >
              <h3 className="text-3xl font-bold text-blue-400 mb-6 font-poppins">
                {skill.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"
                  >
                    <BsDot className="text-blue-400 mr-1" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
