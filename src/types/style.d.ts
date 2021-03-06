declare module '*.css' {
  const css: { [className: string]: string };
  export default css;
}

declare module '*.scss' {
  const scss: { [className: string]: string };
  export default scss;
}

declare module '*.sass' {
  const sass: { [className: string]: string };
  export default sass;
}

declare module "*.module.less" {
  const classes: { [key: string]: string };
  export default classes;
}