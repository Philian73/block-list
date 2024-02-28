export default {
  main: {
    input: './src/shared/api/schema.yaml',
    output: {
      override: {
        mutator: {
          name: 'createInstance',
          path: './src/shared/api/base-api-instance.ts',
        },
      },
      prettier: true,
      target: './src/shared/api/generated.ts',
    },
  },
}
