// This allows prisma to be assigned to the global object without TS errors
// https://stackoverflow.com/questions/68481686/type-typeof-globalthis-has-no-index-signature

declare module globalThis {
  var prisma: PrismaClient<
    PrismaClientOptions,
    never,
    RejectOnNotFound | RejectPerOperation | undefined
  >;
}
