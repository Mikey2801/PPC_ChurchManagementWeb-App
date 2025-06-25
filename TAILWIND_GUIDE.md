# Tailwind CSS Usage Guide

## Best Practices
- Use utility classes in your JSX for layout, spacing, color, and typography
- Prefer Tailwind over inline styles or MUI sx prop for consistency
- Use `className` in your React components

## Example
```jsx
<div className="bg-primary text-white p-4 rounded-lg shadow-md">
  Welcome to the Church Management System!
</div>
```

## Migrating from MUI to Tailwind
- Gradually replace MUI `sx`/`style` props with Tailwind classes
- Use Tailwind for new components/pages
- Keep MUI for complex components (dialogs, pickers) if needed

## Resources
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind Play](https://play.tailwindcss.com/)
