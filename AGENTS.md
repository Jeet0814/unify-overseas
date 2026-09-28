<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Unify Overseas site structure
- Landing page sections live as components in `src/components/` and are composed in `src/routes/index.tsx`; keeps the single-page scroll order in one readable file.
- Scroll-reveal and count-up animations go through `src/components/Reveal.tsx` (`Reveal`, `Counter`) so reduced-motion handling stays in one place.
- Brand colors, gradients, shadows and glass effects are tokens/utilities in `src/styles.css`; components never hardcode colors.
- Extra button looks (`gold`, `onNavy`) are variants in `src/components/ui/button.tsx`, not per-usage className overrides.
- Shared page alignment uses the `site-container` utility in `src/styles.css`; this keeps every section on the same 1200px width and responsive side gutters.
