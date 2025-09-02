# Vero Landing Page - Design System

## 9. TYPOGRAPHY SYSTEM

### Font Family

- **Primary**: Inter (Google Fonts)
- **Fallback**: system-ui, sans-serif
- **Loading**: display=swap for performance

### Font Weights

- **Normal**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

### Font Sizes

- **XS**: 12px
- **SM**: 14px
- **Base**: 16px
- **LG**: 18px
- **XL**: 20px
- **2XL**: 24px
- **3XL**: 30px
- **4XL**: 36px
- **5XL**: 48px
- **6XL**: 60px

### Line Heights

- **Tight**: 1.1
- **Normal**: 1.5
- **Relaxed**: 1.6

### Text Colors

- **Primary**: Gray-900 (#111827)
- **Secondary**: Gray-600 (#4b5563)
- **Muted**: Gray-500 (#6b7280)
- **Accent**: #015FFC (blue)
- **Success**: Green-600 (#059669)
- **Info**: Blue-600 (#2563eb)

## 10. COLOR PALETTE

### Primary Colors

- **Primary Blue**: #015FFC
- **Primary Dark**: #030213
- **White**: #ffffff

### Gray Scale

- **Gray-50**: #f9fafb
- **Gray-100**: #f3f4f6
- **Gray-200**: #e5e7eb
- **Gray-400**: #9ca3af
- **Gray-500**: #6b7280
- **Gray-600**: #4b5563
- **Gray-900**: #111827

### Status Colors

- **Success**: #10b981 (Green-500)
- **Success Light**: #dcfce7 (Green-100)
- **Success Dark**: #166534 (Green-800)
- **Info**: #2563eb (Blue-600)
- **Info Light**: #dbeafe (Blue-100)
- **Info Dark**: #1e40af (Blue-800)

### Background Colors

- **Primary Background**: #ffffff
- **Secondary Background**: #f9fafb (Gray-50)
- **Card Background**: #ffffff
- **Input Background**: #f3f3f5

## 11. SPACING SYSTEM

### Padding/Margin Scale

- **1**: 4px
- **2**: 8px
- **3**: 12px
- **4**: 16px
- **6**: 24px
- **8**: 32px
- **10**: 40px
- **12**: 48px
- **16**: 64px
- **20**: 80px
- **24**: 96px
- **28**: 112px

### Container Max Widths

- **4xl**: 896px
- **6xl**: 1152px
- **7xl**: 1280px

### Grid Gaps

- **4**: 16px
- **6**: 24px
- **8**: 32px
- **12**: 48px

## 12. RESPONSIVE BREAKPOINTS

### Tailwind Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Component-Specific Breakpoints

- **Navigation**: sm (640px) for height changes
- **Hero**: md (768px) for text size changes
- **Features**: md (768px) for grid layout
- **Product Showcase**: md (768px) for metrics grid
- **Footer**: md (768px) for layout direction

## 13. ANIMATIONS & TRANSITIONS

### Transition Durations

- **Fast**: 200ms
- **Normal**: 300ms
- **Slow**: 500ms

### Transition Properties

- **All**: transition-all
- **Colors**: transition-colors
- **Transform**: transition-transform
- **Opacity**: transition-opacity

### Hover Effects

- **Opacity**: 90% on buttons
- **Scale**: 105% on buttons, 110% on icons
- **Color Changes**: Text and icon color transitions
- **Shadow Changes**: Small to medium shadow transitions

### No Entrance Animations

- **Current Implementation**: No scroll-triggered animations
- **No Fade-in Effects**: Static content display
- **No Staggered Animations**: All content appears simultaneously

## Component Usage Examples

### Typography Classes

```tsx
// Headings
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
<h3 className="text-xl font-semibold text-gray-900">

// Body text
<p className="text-lg text-gray-600 leading-relaxed">
<p className="text-base text-gray-600">
<p className="text-sm text-gray-500">
```

### Color Classes

```tsx
// Primary colors
<div className="bg-[#015FFC] text-white">
<div className="bg-white text-gray-900">
<div className="bg-gray-50">

// Status colors
<div className="text-green-500 bg-green-100">
<div className="text-blue-600 bg-blue-100">
```

### Spacing Classes

```tsx
// Padding
<div className="p-4 md:p-6 lg:p-8">
<div className="py-20 px-6 lg:px-8">

// Margins
<div className="mb-6">
<div className="mt-8 pt-8">

// Gaps
<div className="gap-6 md:gap-8">
<div className="space-x-6">
```

### Responsive Classes

```tsx
// Breakpoint usage
<div className="grid grid-cols-1 md:grid-cols-3">
<div className="text-sm md:text-base">
<div className="h-14 sm:h-16">
```

### Animation Classes

```tsx
// Transitions
<button className="transition-all duration-200 hover:opacity-90 hover:scale-105">
<div className="transition-colors duration-200 hover:text-gray-900">
<div className="transition-transform duration-200 hover:scale-110">
```
