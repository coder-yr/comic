const fs = require('fs');

let text = fs.readFileSync('src/data/safari.ts', 'utf8');
text = text.replace('  number: string;\n', '  number: string;\n  slug: string;\n');

const slugMap = {
  'ch-00': 'the-seed-of-silicon',
  'ch-01': 'the-jungle-audit',
  'ch-02': 'the-great-trunk',
  'ch-03': 'pack-instinct',
  'ch-04': 'silent-eyes',
  'ch-05': 'the-innovation-sprint',
  'ch-06': 'zero-trust-canopy',
  'ch-07': 'the-velocity-gap',
  'ch-08': 'colony-intelligence',
  'ch-09': 'prestige-brand-synthesis',
  'ch-10': 'curiosity-engine',
  'ch-11': 'the-sovereign-moat',
  'ch-12': 'autonomous-apex'
};

for (const [id, slug] of Object.entries(slugMap)) {
  const target = 'id: "' + id + '",\n    number: ';
  text = text.replace(target, 'id: "' + id + '",\n    slug: "' + slug + '",\n    number: ');
}

fs.writeFileSync('src/data/safari.ts', text, 'utf8');
console.log('Successfully added slugs to safari.ts');

