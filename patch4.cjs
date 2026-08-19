const fs = require('fs');
let c = fs.readFileSync('src/pages/CodeOfConduct.tsx', 'utf8');

c = c.replace(
  '<PageHeader title={title} subtitle={subtitle} breadcrumbs={[{ label: "Students" }, { label: "Code of Conduct" }]} />\r\n      <section className="py-20 md:py-28" ref={ref}>',
  '<PageHeader title={title} subtitle={subtitle} breadcrumbs={[{ label: "Students" }, { label: "Code of Conduct" }]} />\n      {data?.bannerImage && (\n        <div className="container-wide mt-12">\n          <div className="rounded-[2.5rem] overflow-hidden shadow-xl max-h-[350px]">\n            <img src={data.bannerImage} alt="Code of Conduct Banner" className="w-full h-full object-cover" />\n          </div>\n        </div>\n      )}\n      <section className="py-20 md:py-28" ref={ref}>'
);

c = c.replace(
  '<PageHeader title={title} subtitle={subtitle} breadcrumbs={[{ label: "Students" }, { label: "Code of Conduct" }]} />\n      <section className="py-20 md:py-28" ref={ref}>',
  '<PageHeader title={title} subtitle={subtitle} breadcrumbs={[{ label: "Students" }, { label: "Code of Conduct" }]} />\n      {data?.bannerImage && (\n        <div className="container-wide mt-12">\n          <div className="rounded-[2.5rem] overflow-hidden shadow-xl max-h-[350px]">\n            <img src={data.bannerImage} alt="Code of Conduct Banner" className="w-full h-full object-cover" />\n          </div>\n        </div>\n      )}\n      <section className="py-20 md:py-28" ref={ref}>'
);

fs.writeFileSync('src/pages/CodeOfConduct.tsx', c);
