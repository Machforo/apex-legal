const fs = require('fs');
let c = fs.readFileSync('src/pages/Careers.tsx', 'utf8');

c = c.replace(
  '  const { data } = useIshanLawData("careers");',
  '  const { data } = useIshanLawData("careers");\n  const { data: pageData } = useIshanLawData("careerspage");'
);

c = c.replace(
  '<PageHeader title="Careers at Ishan Law" subtitle="Join a community of legal scholars and practitioners dedicated to excellence" breadcrumbs={[{ label: "Contact", href: "/contact" }, { label: "Careers" }]} />',
  '<PageHeader title={pageData?.title || "Careers at Ishan Law"} subtitle={pageData?.subtitle || "Join a community of legal scholars and practitioners dedicated to excellence"} breadcrumbs={[{ label: "Contact", href: "/contact" }, { label: "Careers" }]} />\n      {pageData?.bannerImage && (\n        <div className="container-wide mt-12">\n          <div className="rounded-[2.5rem] overflow-hidden shadow-xl max-h-[380px]">\n            <img src={pageData.bannerImage} alt="Careers Banner" className="w-full h-full object-cover" />\n          </div>\n        </div>\n      )}'
);

c = c.replace(
  '<img src="https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-5.jpg" alt="Ishan Law Campus" className="w-full h-80 object-cover" />',
  '<img src={pageData?.image || "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-5.jpg"} alt="Ishan Law Careers" className="w-full h-80 object-cover" />'
);

c = c.replace(
  /Ishan Law invites qualified legal educators, practising advocates, and administrative professionals to join our institution — contributing to producing the next generation of India's legal professionals\. We offer a highly professional environment, strong research support, and competitive compensation to foster academic growth and career advancement\./g,
  "{pageData?.overview || \"Ishan Law invites qualified legal educators, practising advocates, and administrative professionals to join our institution — contributing to producing the next generation of India's legal professionals. We offer a highly professional environment, strong research support, and competitive compensation to foster academic growth and career advancement.\"}"
);

c = c.replace(
  '<p className="text-foreground/70 leading-relaxed text-lg">',
  '<p className="text-foreground/70 leading-relaxed text-lg whitespace-pre-wrap">'
);

fs.writeFileSync('src/pages/Careers.tsx', c);
