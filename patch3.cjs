const fs = require('fs');
let c = fs.readFileSync('src/pages/MandatoryDisclosure.tsx', 'utf8');

c = c.replace(
  '<PageHeader\r\n        title="Mandatory Disclosure"\r\n        subtitle="BCI / CCS University format mandatory disclosure document — updated annually"\r\n        breadcrumbs={[{ label: "Mandatory Disclosure" }]}\r\n      />',
  '<PageHeader\n        title={data?.title || "Mandatory Disclosure"}\n        subtitle={data?.subtitle || "BCI / CCS University format mandatory disclosure document — updated annually"}\n        breadcrumbs={[{ label: "Mandatory Disclosure" }]}\n      />'
);

c = c.replace(
  '<PageHeader\n        title="Mandatory Disclosure"\n        subtitle="BCI / CCS University format mandatory disclosure document — updated annually"\n        breadcrumbs={[{ label: "Mandatory Disclosure" }]}\n      />',
  '<PageHeader\n        title={data?.title || "Mandatory Disclosure"}\n        subtitle={data?.subtitle || "BCI / CCS University format mandatory disclosure document — updated annually"}\n        breadcrumbs={[{ label: "Mandatory Disclosure" }]}\n      />'
);

fs.writeFileSync('src/pages/MandatoryDisclosure.tsx', c);
