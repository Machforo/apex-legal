const fs = require('fs');
let c = fs.readFileSync('src/pages/Feedback.tsx', 'utf8');

c = c.replace(
  'import { useState } from "react";',
  'import { useState } from "react";\nimport { useIshanLawData } from "@/hooks/useIshanLawData";'
);

c = c.replace(
  '  const ref = useScrollReveal();',
  '  const ref = useScrollReveal();\n  const { data } = useIshanLawData("feedbackpage");'
);

c = c.replace(
  '<PageHeader title="Feedback" subtitle="Help us improve — share your experience as a student, parent, or visitor" breadcrumbs={[{ label: "Contact", href: "/contact" }, { label: "Feedback" }]} />',
  '<PageHeader title={data?.title || "Feedback"} subtitle={data?.subtitle || "Help us improve — share your experience as a student, parent, or visitor"} breadcrumbs={[{ label: "Contact", href: "/contact" }, { label: "Feedback" }]} />\n      {data?.bannerImage && (\n        <div className="container-wide mt-12">\n          <div className="rounded-[2.5rem] overflow-hidden shadow-xl max-h-[380px]">\n            <img src={data.bannerImage} alt="Feedback Banner" className="w-full h-full object-cover" />\n          </div>\n        </div>\n      )}'
);

c = c.replace(
  '<img src="https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-2.jpg" alt="Ishan Law Campus" className="w-full h-80 object-cover" />',
  '<img src={data?.image || "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-2.jpg"} alt="Ishan Law Feedback" className="w-full h-80 object-cover" />'
);

c = c.replace(
  /Ishan Law values feedback from students, parents, and visitors — assessment of academic quality, faculty, facilities, and administrative support helps us improve\. All responses are carefully reviewed by the Quality Assurance Cell and reach the Principal's office directly\. Your inputs remain private and confidential\./g,
  "{data?.overview || \"Ishan Law values feedback from students, parents, and visitors — assessment of academic quality, faculty, facilities, and administrative support helps us improve. All responses are carefully reviewed by the Quality Assurance Cell and reach the Principal's office directly. Your inputs remain private and confidential.\"}"
);

c = c.replace(
  '<p className="text-foreground/70 leading-relaxed text-lg">',
  '<p className="text-foreground/70 leading-relaxed text-lg whitespace-pre-wrap">'
);

fs.writeFileSync('src/pages/Feedback.tsx', c);
