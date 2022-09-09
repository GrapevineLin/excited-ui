import { App, defineAsyncComponent } from "vue";
type requireModule = Record<string, () => Promise<unknown>>;

export function registerComponents(
  requireModule: requireModule,
  app: App
): void {
  for (const module in requireModule) {
    const name = module.split("/")?.at(-1)?.split(".")[0];
    if (name) {
      const modulesConent: any = requireModule[module];
      app.component(name, defineAsyncComponent(modulesConent));
    }
  }
}

export function batchRegisterComponents(
  requireModules: requireModule[],
  app: App
) {
  requireModules.forEach((requireModule) =>
    registerComponents(requireModule, app)
  );
}
