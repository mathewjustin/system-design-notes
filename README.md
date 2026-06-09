# System Design Notes

A growing system-design and engineering study site. The project is intentionally
small at the beginning: a static topic map that can gradually become a structured
collection of original notes, diagrams, references, and practical lessons.

## Source Material

The historical notebook remains available at
[DesignPatternsAndAbhyasas](https://github.com/mathewjustin/DesignPatternsAndAbhyasas).
It is a reference and migration checklist, not content copied automatically into
this repository. Topics should be rewritten, verified, and organized as they move
into this site.

## Initial Topic Map

- System fundamentals
- Infrastructure
- Data systems
- Application design

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
```

The production build is a static export suitable for GitHub Pages. Set
`NEXT_PUBLIC_BASE_PATH=/system-design-notes` when building for the repository
Pages URL.

The same export is mounted in Justin's main Hugo blog at
<https://justinmathew.com/system-design-notes/>. Pushes can trigger that blog
deployment through `.github/workflows/trigger-blog-deploy.yml` when the
`BLOG_REPO_DISPATCH_TOKEN` repository secret is configured.

## Direction

Keep the first iterations simple. Add content as it is learned or revisited,
prefer concise original explanations, cite useful sources, and add interactive
features only when the notes establish a clear need for them.
