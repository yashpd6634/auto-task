
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Auto
 * 
 */
export type Auto = $Result.DefaultSelection<Prisma.$AutoPayload>
/**
 * Model Trigger
 * 
 */
export type Trigger = $Result.DefaultSelection<Prisma.$TriggerPayload>
/**
 * Model AvailableTrigger
 * 
 */
export type AvailableTrigger = $Result.DefaultSelection<Prisma.$AvailableTriggerPayload>
/**
 * Model Action
 * 
 */
export type Action = $Result.DefaultSelection<Prisma.$ActionPayload>
/**
 * Model AvailableAction
 * 
 */
export type AvailableAction = $Result.DefaultSelection<Prisma.$AvailableActionPayload>
/**
 * Model AutoRun
 * 
 */
export type AutoRun = $Result.DefaultSelection<Prisma.$AutoRunPayload>
/**
 * Model AutoRunOutbox
 * 
 */
export type AutoRunOutbox = $Result.DefaultSelection<Prisma.$AutoRunOutboxPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auto`: Exposes CRUD operations for the **Auto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Autos
    * const autos = await prisma.auto.findMany()
    * ```
    */
  get auto(): Prisma.AutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trigger`: Exposes CRUD operations for the **Trigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Triggers
    * const triggers = await prisma.trigger.findMany()
    * ```
    */
  get trigger(): Prisma.TriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableTrigger`: Exposes CRUD operations for the **AvailableTrigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableTriggers
    * const availableTriggers = await prisma.availableTrigger.findMany()
    * ```
    */
  get availableTrigger(): Prisma.AvailableTriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.action`: Exposes CRUD operations for the **Action** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actions
    * const actions = await prisma.action.findMany()
    * ```
    */
  get action(): Prisma.ActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableAction`: Exposes CRUD operations for the **AvailableAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableActions
    * const availableActions = await prisma.availableAction.findMany()
    * ```
    */
  get availableAction(): Prisma.AvailableActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.autoRun`: Exposes CRUD operations for the **AutoRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AutoRuns
    * const autoRuns = await prisma.autoRun.findMany()
    * ```
    */
  get autoRun(): Prisma.AutoRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.autoRunOutbox`: Exposes CRUD operations for the **AutoRunOutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AutoRunOutboxes
    * const autoRunOutboxes = await prisma.autoRunOutbox.findMany()
    * ```
    */
  get autoRunOutbox(): Prisma.AutoRunOutboxDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Auto: 'Auto',
    Trigger: 'Trigger',
    AvailableTrigger: 'AvailableTrigger',
    Action: 'Action',
    AvailableAction: 'AvailableAction',
    AutoRun: 'AutoRun',
    AutoRunOutbox: 'AutoRunOutbox'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "auto" | "trigger" | "availableTrigger" | "action" | "availableAction" | "autoRun" | "autoRunOutbox"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Auto: {
        payload: Prisma.$AutoPayload<ExtArgs>
        fields: Prisma.AutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>
          }
          findFirst: {
            args: Prisma.AutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>
          }
          findMany: {
            args: Prisma.AutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>[]
          }
          create: {
            args: Prisma.AutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>
          }
          createMany: {
            args: Prisma.AutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>[]
          }
          delete: {
            args: Prisma.AutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>
          }
          update: {
            args: Prisma.AutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>
          }
          deleteMany: {
            args: Prisma.AutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>[]
          }
          upsert: {
            args: Prisma.AutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>
          }
          aggregate: {
            args: Prisma.AutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuto>
          }
          groupBy: {
            args: Prisma.AutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutoCountArgs<ExtArgs>
            result: $Utils.Optional<AutoCountAggregateOutputType> | number
          }
        }
      }
      Trigger: {
        payload: Prisma.$TriggerPayload<ExtArgs>
        fields: Prisma.TriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findFirst: {
            args: Prisma.TriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findMany: {
            args: Prisma.TriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          create: {
            args: Prisma.TriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          createMany: {
            args: Prisma.TriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          delete: {
            args: Prisma.TriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          update: {
            args: Prisma.TriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          deleteMany: {
            args: Prisma.TriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriggerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          upsert: {
            args: Prisma.TriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          aggregate: {
            args: Prisma.TriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrigger>
          }
          groupBy: {
            args: Prisma.TriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerCountAggregateOutputType> | number
          }
        }
      }
      AvailableTrigger: {
        payload: Prisma.$AvailableTriggerPayload<ExtArgs>
        fields: Prisma.AvailableTriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableTriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableTriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          findFirst: {
            args: Prisma.AvailableTriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableTriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          findMany: {
            args: Prisma.AvailableTriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>[]
          }
          create: {
            args: Prisma.AvailableTriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          createMany: {
            args: Prisma.AvailableTriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableTriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>[]
          }
          delete: {
            args: Prisma.AvailableTriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          update: {
            args: Prisma.AvailableTriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          deleteMany: {
            args: Prisma.AvailableTriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableTriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailableTriggerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>[]
          }
          upsert: {
            args: Prisma.AvailableTriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          aggregate: {
            args: Prisma.AvailableTriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableTrigger>
          }
          groupBy: {
            args: Prisma.AvailableTriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableTriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableTriggerCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableTriggerCountAggregateOutputType> | number
          }
        }
      }
      Action: {
        payload: Prisma.$ActionPayload<ExtArgs>
        fields: Prisma.ActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findFirst: {
            args: Prisma.ActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findMany: {
            args: Prisma.ActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          create: {
            args: Prisma.ActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          createMany: {
            args: Prisma.ActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          delete: {
            args: Prisma.ActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          update: {
            args: Prisma.ActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          deleteMany: {
            args: Prisma.ActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          upsert: {
            args: Prisma.ActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          aggregate: {
            args: Prisma.ActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAction>
          }
          groupBy: {
            args: Prisma.ActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionCountArgs<ExtArgs>
            result: $Utils.Optional<ActionCountAggregateOutputType> | number
          }
        }
      }
      AvailableAction: {
        payload: Prisma.$AvailableActionPayload<ExtArgs>
        fields: Prisma.AvailableActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          findFirst: {
            args: Prisma.AvailableActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          findMany: {
            args: Prisma.AvailableActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>[]
          }
          create: {
            args: Prisma.AvailableActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          createMany: {
            args: Prisma.AvailableActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>[]
          }
          delete: {
            args: Prisma.AvailableActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          update: {
            args: Prisma.AvailableActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          deleteMany: {
            args: Prisma.AvailableActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailableActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>[]
          }
          upsert: {
            args: Prisma.AvailableActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          aggregate: {
            args: Prisma.AvailableActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableAction>
          }
          groupBy: {
            args: Prisma.AvailableActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableActionCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableActionCountAggregateOutputType> | number
          }
        }
      }
      AutoRun: {
        payload: Prisma.$AutoRunPayload<ExtArgs>
        fields: Prisma.AutoRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutoRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutoRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunPayload>
          }
          findFirst: {
            args: Prisma.AutoRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutoRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunPayload>
          }
          findMany: {
            args: Prisma.AutoRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunPayload>[]
          }
          create: {
            args: Prisma.AutoRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunPayload>
          }
          createMany: {
            args: Prisma.AutoRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutoRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunPayload>[]
          }
          delete: {
            args: Prisma.AutoRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunPayload>
          }
          update: {
            args: Prisma.AutoRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunPayload>
          }
          deleteMany: {
            args: Prisma.AutoRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutoRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutoRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunPayload>[]
          }
          upsert: {
            args: Prisma.AutoRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunPayload>
          }
          aggregate: {
            args: Prisma.AutoRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutoRun>
          }
          groupBy: {
            args: Prisma.AutoRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutoRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutoRunCountArgs<ExtArgs>
            result: $Utils.Optional<AutoRunCountAggregateOutputType> | number
          }
        }
      }
      AutoRunOutbox: {
        payload: Prisma.$AutoRunOutboxPayload<ExtArgs>
        fields: Prisma.AutoRunOutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutoRunOutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunOutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutoRunOutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunOutboxPayload>
          }
          findFirst: {
            args: Prisma.AutoRunOutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunOutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutoRunOutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunOutboxPayload>
          }
          findMany: {
            args: Prisma.AutoRunOutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunOutboxPayload>[]
          }
          create: {
            args: Prisma.AutoRunOutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunOutboxPayload>
          }
          createMany: {
            args: Prisma.AutoRunOutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutoRunOutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunOutboxPayload>[]
          }
          delete: {
            args: Prisma.AutoRunOutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunOutboxPayload>
          }
          update: {
            args: Prisma.AutoRunOutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunOutboxPayload>
          }
          deleteMany: {
            args: Prisma.AutoRunOutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutoRunOutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutoRunOutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunOutboxPayload>[]
          }
          upsert: {
            args: Prisma.AutoRunOutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRunOutboxPayload>
          }
          aggregate: {
            args: Prisma.AutoRunOutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutoRunOutbox>
          }
          groupBy: {
            args: Prisma.AutoRunOutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutoRunOutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutoRunOutboxCountArgs<ExtArgs>
            result: $Utils.Optional<AutoRunOutboxCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    auto?: AutoOmit
    trigger?: TriggerOmit
    availableTrigger?: AvailableTriggerOmit
    action?: ActionOmit
    availableAction?: AvailableActionOmit
    autoRun?: AutoRunOmit
    autoRunOutbox?: AutoRunOutboxOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    autos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autos?: boolean | UserCountOutputTypeCountAutosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutoWhereInput
  }


  /**
   * Count Type AutoCountOutputType
   */

  export type AutoCountOutputType = {
    action: number
    autoRuns: number
  }

  export type AutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | AutoCountOutputTypeCountActionArgs
    autoRuns?: boolean | AutoCountOutputTypeCountAutoRunsArgs
  }

  // Custom InputTypes
  /**
   * AutoCountOutputType without action
   */
  export type AutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoCountOutputType
     */
    select?: AutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutoCountOutputType without action
   */
  export type AutoCountOutputTypeCountActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }

  /**
   * AutoCountOutputType without action
   */
  export type AutoCountOutputTypeCountAutoRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutoRunWhereInput
  }


  /**
   * Count Type AvailableTriggerCountOutputType
   */

  export type AvailableTriggerCountOutputType = {
    triggers: number
  }

  export type AvailableTriggerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    triggers?: boolean | AvailableTriggerCountOutputTypeCountTriggersArgs
  }

  // Custom InputTypes
  /**
   * AvailableTriggerCountOutputType without action
   */
  export type AvailableTriggerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggerCountOutputType
     */
    select?: AvailableTriggerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableTriggerCountOutputType without action
   */
  export type AvailableTriggerCountOutputTypeCountTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
  }


  /**
   * Count Type AvailableActionCountOutputType
   */

  export type AvailableActionCountOutputType = {
    actions: number
  }

  export type AvailableActionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | AvailableActionCountOutputTypeCountActionsArgs
  }

  // Custom InputTypes
  /**
   * AvailableActionCountOutputType without action
   */
  export type AvailableActionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionCountOutputType
     */
    select?: AvailableActionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableActionCountOutputType without action
   */
  export type AvailableActionCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    autos?: boolean | User$autosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autos?: boolean | User$autosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      autos: Prisma.$AutoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autos<T extends User$autosArgs<ExtArgs> = {}>(args?: Subset<T, User$autosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.autos
   */
  export type User$autosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    where?: AutoWhereInput
    orderBy?: AutoOrderByWithRelationInput | AutoOrderByWithRelationInput[]
    cursor?: AutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutoScalarFieldEnum | AutoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Auto
   */

  export type AggregateAuto = {
    _count: AutoCountAggregateOutputType | null
    _min: AutoMinAggregateOutputType | null
    _max: AutoMaxAggregateOutputType | null
  }

  export type AutoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
  }

  export type AutoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
  }

  export type AutoCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    _all: number
  }


  export type AutoMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type AutoMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type AutoCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    _all?: true
  }

  export type AutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auto to aggregate.
     */
    where?: AutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autos to fetch.
     */
    orderBy?: AutoOrderByWithRelationInput | AutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Autos
    **/
    _count?: true | AutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutoMaxAggregateInputType
  }

  export type GetAutoAggregateType<T extends AutoAggregateArgs> = {
        [P in keyof T & keyof AggregateAuto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuto[P]>
      : GetScalarType<T[P], AggregateAuto[P]>
  }




  export type AutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutoWhereInput
    orderBy?: AutoOrderByWithAggregationInput | AutoOrderByWithAggregationInput[]
    by: AutoScalarFieldEnum[] | AutoScalarFieldEnum
    having?: AutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutoCountAggregateInputType | true
    _min?: AutoMinAggregateInputType
    _max?: AutoMaxAggregateInputType
  }

  export type AutoGroupByOutputType = {
    id: string
    userId: string
    name: string
    _count: AutoCountAggregateOutputType | null
    _min: AutoMinAggregateOutputType | null
    _max: AutoMaxAggregateOutputType | null
  }

  type GetAutoGroupByPayload<T extends AutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutoGroupByOutputType[P]>
            : GetScalarType<T[P], AutoGroupByOutputType[P]>
        }
      >
    >


  export type AutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trigger?: boolean | Auto$triggerArgs<ExtArgs>
    action?: boolean | Auto$actionArgs<ExtArgs>
    autoRuns?: boolean | Auto$autoRunsArgs<ExtArgs>
    _count?: boolean | AutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auto"]>

  export type AutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auto"]>

  export type AutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auto"]>

  export type AutoSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
  }

  export type AutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name", ExtArgs["result"]["auto"]>
  export type AutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trigger?: boolean | Auto$triggerArgs<ExtArgs>
    action?: boolean | Auto$actionArgs<ExtArgs>
    autoRuns?: boolean | Auto$autoRunsArgs<ExtArgs>
    _count?: boolean | AutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auto"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trigger: Prisma.$TriggerPayload<ExtArgs> | null
      action: Prisma.$ActionPayload<ExtArgs>[]
      autoRuns: Prisma.$AutoRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
    }, ExtArgs["result"]["auto"]>
    composites: {}
  }

  type AutoGetPayload<S extends boolean | null | undefined | AutoDefaultArgs> = $Result.GetResult<Prisma.$AutoPayload, S>

  type AutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutoCountAggregateInputType | true
    }

  export interface AutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auto'], meta: { name: 'Auto' } }
    /**
     * Find zero or one Auto that matches the filter.
     * @param {AutoFindUniqueArgs} args - Arguments to find a Auto
     * @example
     * // Get one Auto
     * const auto = await prisma.auto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutoFindUniqueArgs>(args: SelectSubset<T, AutoFindUniqueArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutoFindUniqueOrThrowArgs} args - Arguments to find a Auto
     * @example
     * // Get one Auto
     * const auto = await prisma.auto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutoFindUniqueOrThrowArgs>(args: SelectSubset<T, AutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoFindFirstArgs} args - Arguments to find a Auto
     * @example
     * // Get one Auto
     * const auto = await prisma.auto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutoFindFirstArgs>(args?: SelectSubset<T, AutoFindFirstArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoFindFirstOrThrowArgs} args - Arguments to find a Auto
     * @example
     * // Get one Auto
     * const auto = await prisma.auto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutoFindFirstOrThrowArgs>(args?: SelectSubset<T, AutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Autos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Autos
     * const autos = await prisma.auto.findMany()
     * 
     * // Get first 10 Autos
     * const autos = await prisma.auto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autoWithIdOnly = await prisma.auto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutoFindManyArgs>(args?: SelectSubset<T, AutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auto.
     * @param {AutoCreateArgs} args - Arguments to create a Auto.
     * @example
     * // Create one Auto
     * const Auto = await prisma.auto.create({
     *   data: {
     *     // ... data to create a Auto
     *   }
     * })
     * 
     */
    create<T extends AutoCreateArgs>(args: SelectSubset<T, AutoCreateArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Autos.
     * @param {AutoCreateManyArgs} args - Arguments to create many Autos.
     * @example
     * // Create many Autos
     * const auto = await prisma.auto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutoCreateManyArgs>(args?: SelectSubset<T, AutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Autos and returns the data saved in the database.
     * @param {AutoCreateManyAndReturnArgs} args - Arguments to create many Autos.
     * @example
     * // Create many Autos
     * const auto = await prisma.auto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Autos and only return the `id`
     * const autoWithIdOnly = await prisma.auto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutoCreateManyAndReturnArgs>(args?: SelectSubset<T, AutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auto.
     * @param {AutoDeleteArgs} args - Arguments to delete one Auto.
     * @example
     * // Delete one Auto
     * const Auto = await prisma.auto.delete({
     *   where: {
     *     // ... filter to delete one Auto
     *   }
     * })
     * 
     */
    delete<T extends AutoDeleteArgs>(args: SelectSubset<T, AutoDeleteArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auto.
     * @param {AutoUpdateArgs} args - Arguments to update one Auto.
     * @example
     * // Update one Auto
     * const auto = await prisma.auto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutoUpdateArgs>(args: SelectSubset<T, AutoUpdateArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Autos.
     * @param {AutoDeleteManyArgs} args - Arguments to filter Autos to delete.
     * @example
     * // Delete a few Autos
     * const { count } = await prisma.auto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutoDeleteManyArgs>(args?: SelectSubset<T, AutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Autos
     * const auto = await prisma.auto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutoUpdateManyArgs>(args: SelectSubset<T, AutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autos and returns the data updated in the database.
     * @param {AutoUpdateManyAndReturnArgs} args - Arguments to update many Autos.
     * @example
     * // Update many Autos
     * const auto = await prisma.auto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Autos and only return the `id`
     * const autoWithIdOnly = await prisma.auto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AutoUpdateManyAndReturnArgs>(args: SelectSubset<T, AutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auto.
     * @param {AutoUpsertArgs} args - Arguments to update or create a Auto.
     * @example
     * // Update or create a Auto
     * const auto = await prisma.auto.upsert({
     *   create: {
     *     // ... data to create a Auto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auto we want to update
     *   }
     * })
     */
    upsert<T extends AutoUpsertArgs>(args: SelectSubset<T, AutoUpsertArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Autos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoCountArgs} args - Arguments to filter Autos to count.
     * @example
     * // Count the number of Autos
     * const count = await prisma.auto.count({
     *   where: {
     *     // ... the filter for the Autos we want to count
     *   }
     * })
    **/
    count<T extends AutoCountArgs>(
      args?: Subset<T, AutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AutoAggregateArgs>(args: Subset<T, AutoAggregateArgs>): Prisma.PrismaPromise<GetAutoAggregateType<T>>

    /**
     * Group by Auto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutoGroupByArgs['orderBy'] }
        : { orderBy?: AutoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auto model
   */
  readonly fields: AutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trigger<T extends Auto$triggerArgs<ExtArgs> = {}>(args?: Subset<T, Auto$triggerArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    action<T extends Auto$actionArgs<ExtArgs> = {}>(args?: Subset<T, Auto$actionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    autoRuns<T extends Auto$autoRunsArgs<ExtArgs> = {}>(args?: Subset<T, Auto$autoRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Auto model
   */
  interface AutoFieldRefs {
    readonly id: FieldRef<"Auto", 'String'>
    readonly userId: FieldRef<"Auto", 'String'>
    readonly name: FieldRef<"Auto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Auto findUnique
   */
  export type AutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * Filter, which Auto to fetch.
     */
    where: AutoWhereUniqueInput
  }

  /**
   * Auto findUniqueOrThrow
   */
  export type AutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * Filter, which Auto to fetch.
     */
    where: AutoWhereUniqueInput
  }

  /**
   * Auto findFirst
   */
  export type AutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * Filter, which Auto to fetch.
     */
    where?: AutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autos to fetch.
     */
    orderBy?: AutoOrderByWithRelationInput | AutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autos.
     */
    cursor?: AutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autos.
     */
    distinct?: AutoScalarFieldEnum | AutoScalarFieldEnum[]
  }

  /**
   * Auto findFirstOrThrow
   */
  export type AutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * Filter, which Auto to fetch.
     */
    where?: AutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autos to fetch.
     */
    orderBy?: AutoOrderByWithRelationInput | AutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autos.
     */
    cursor?: AutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autos.
     */
    distinct?: AutoScalarFieldEnum | AutoScalarFieldEnum[]
  }

  /**
   * Auto findMany
   */
  export type AutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * Filter, which Autos to fetch.
     */
    where?: AutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autos to fetch.
     */
    orderBy?: AutoOrderByWithRelationInput | AutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Autos.
     */
    cursor?: AutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autos.
     */
    skip?: number
    distinct?: AutoScalarFieldEnum | AutoScalarFieldEnum[]
  }

  /**
   * Auto create
   */
  export type AutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Auto.
     */
    data: XOR<AutoCreateInput, AutoUncheckedCreateInput>
  }

  /**
   * Auto createMany
   */
  export type AutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Autos.
     */
    data: AutoCreateManyInput | AutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auto createManyAndReturn
   */
  export type AutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * The data used to create many Autos.
     */
    data: AutoCreateManyInput | AutoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Auto update
   */
  export type AutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Auto.
     */
    data: XOR<AutoUpdateInput, AutoUncheckedUpdateInput>
    /**
     * Choose, which Auto to update.
     */
    where: AutoWhereUniqueInput
  }

  /**
   * Auto updateMany
   */
  export type AutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Autos.
     */
    data: XOR<AutoUpdateManyMutationInput, AutoUncheckedUpdateManyInput>
    /**
     * Filter which Autos to update
     */
    where?: AutoWhereInput
    /**
     * Limit how many Autos to update.
     */
    limit?: number
  }

  /**
   * Auto updateManyAndReturn
   */
  export type AutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * The data used to update Autos.
     */
    data: XOR<AutoUpdateManyMutationInput, AutoUncheckedUpdateManyInput>
    /**
     * Filter which Autos to update
     */
    where?: AutoWhereInput
    /**
     * Limit how many Autos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Auto upsert
   */
  export type AutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Auto to update in case it exists.
     */
    where: AutoWhereUniqueInput
    /**
     * In case the Auto found by the `where` argument doesn't exist, create a new Auto with this data.
     */
    create: XOR<AutoCreateInput, AutoUncheckedCreateInput>
    /**
     * In case the Auto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutoUpdateInput, AutoUncheckedUpdateInput>
  }

  /**
   * Auto delete
   */
  export type AutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * Filter which Auto to delete.
     */
    where: AutoWhereUniqueInput
  }

  /**
   * Auto deleteMany
   */
  export type AutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autos to delete
     */
    where?: AutoWhereInput
    /**
     * Limit how many Autos to delete.
     */
    limit?: number
  }

  /**
   * Auto.trigger
   */
  export type Auto$triggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
  }

  /**
   * Auto.action
   */
  export type Auto$actionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Auto.autoRuns
   */
  export type Auto$autoRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRun
     */
    select?: AutoRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRun
     */
    omit?: AutoRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunInclude<ExtArgs> | null
    where?: AutoRunWhereInput
    orderBy?: AutoRunOrderByWithRelationInput | AutoRunOrderByWithRelationInput[]
    cursor?: AutoRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutoRunScalarFieldEnum | AutoRunScalarFieldEnum[]
  }

  /**
   * Auto without action
   */
  export type AutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
  }


  /**
   * Model Trigger
   */

  export type AggregateTrigger = {
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  export type TriggerMinAggregateOutputType = {
    id: string | null
    autoId: string | null
    availableTriggerId: string | null
  }

  export type TriggerMaxAggregateOutputType = {
    id: string | null
    autoId: string | null
    availableTriggerId: string | null
  }

  export type TriggerCountAggregateOutputType = {
    id: number
    autoId: number
    availableTriggerId: number
    _all: number
  }


  export type TriggerMinAggregateInputType = {
    id?: true
    autoId?: true
    availableTriggerId?: true
  }

  export type TriggerMaxAggregateInputType = {
    id?: true
    autoId?: true
    availableTriggerId?: true
  }

  export type TriggerCountAggregateInputType = {
    id?: true
    autoId?: true
    availableTriggerId?: true
    _all?: true
  }

  export type TriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trigger to aggregate.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Triggers
    **/
    _count?: true | TriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerMaxAggregateInputType
  }

  export type GetTriggerAggregateType<T extends TriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrigger[P]>
      : GetScalarType<T[P], AggregateTrigger[P]>
  }




  export type TriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithAggregationInput | TriggerOrderByWithAggregationInput[]
    by: TriggerScalarFieldEnum[] | TriggerScalarFieldEnum
    having?: TriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerCountAggregateInputType | true
    _min?: TriggerMinAggregateInputType
    _max?: TriggerMaxAggregateInputType
  }

  export type TriggerGroupByOutputType = {
    id: string
    autoId: string
    availableTriggerId: string
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  type GetTriggerGroupByPayload<T extends TriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerGroupByOutputType[P]>
        }
      >
    >


  export type TriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autoId?: boolean
    availableTriggerId?: boolean
    auto?: boolean | AutoDefaultArgs<ExtArgs>
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autoId?: boolean
    availableTriggerId?: boolean
    auto?: boolean | AutoDefaultArgs<ExtArgs>
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autoId?: boolean
    availableTriggerId?: boolean
    auto?: boolean | AutoDefaultArgs<ExtArgs>
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectScalar = {
    id?: boolean
    autoId?: boolean
    availableTriggerId?: boolean
  }

  export type TriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "autoId" | "availableTriggerId", ExtArgs["result"]["trigger"]>
  export type TriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auto?: boolean | AutoDefaultArgs<ExtArgs>
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auto?: boolean | AutoDefaultArgs<ExtArgs>
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auto?: boolean | AutoDefaultArgs<ExtArgs>
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
  }

  export type $TriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trigger"
    objects: {
      auto: Prisma.$AutoPayload<ExtArgs>
      type: Prisma.$AvailableTriggerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      autoId: string
      availableTriggerId: string
    }, ExtArgs["result"]["trigger"]>
    composites: {}
  }

  type TriggerGetPayload<S extends boolean | null | undefined | TriggerDefaultArgs> = $Result.GetResult<Prisma.$TriggerPayload, S>

  type TriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerCountAggregateInputType | true
    }

  export interface TriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trigger'], meta: { name: 'Trigger' } }
    /**
     * Find zero or one Trigger that matches the filter.
     * @param {TriggerFindUniqueArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerFindUniqueArgs>(args: SelectSubset<T, TriggerFindUniqueArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerFindUniqueOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerFindFirstArgs>(args?: SelectSubset<T, TriggerFindFirstArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Triggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triggers
     * const triggers = await prisma.trigger.findMany()
     * 
     * // Get first 10 Triggers
     * const triggers = await prisma.trigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerWithIdOnly = await prisma.trigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerFindManyArgs>(args?: SelectSubset<T, TriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trigger.
     * @param {TriggerCreateArgs} args - Arguments to create a Trigger.
     * @example
     * // Create one Trigger
     * const Trigger = await prisma.trigger.create({
     *   data: {
     *     // ... data to create a Trigger
     *   }
     * })
     * 
     */
    create<T extends TriggerCreateArgs>(args: SelectSubset<T, TriggerCreateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Triggers.
     * @param {TriggerCreateManyArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerCreateManyArgs>(args?: SelectSubset<T, TriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Triggers and returns the data saved in the database.
     * @param {TriggerCreateManyAndReturnArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trigger.
     * @param {TriggerDeleteArgs} args - Arguments to delete one Trigger.
     * @example
     * // Delete one Trigger
     * const Trigger = await prisma.trigger.delete({
     *   where: {
     *     // ... filter to delete one Trigger
     *   }
     * })
     * 
     */
    delete<T extends TriggerDeleteArgs>(args: SelectSubset<T, TriggerDeleteArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trigger.
     * @param {TriggerUpdateArgs} args - Arguments to update one Trigger.
     * @example
     * // Update one Trigger
     * const trigger = await prisma.trigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerUpdateArgs>(args: SelectSubset<T, TriggerUpdateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Triggers.
     * @param {TriggerDeleteManyArgs} args - Arguments to filter Triggers to delete.
     * @example
     * // Delete a few Triggers
     * const { count } = await prisma.trigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerDeleteManyArgs>(args?: SelectSubset<T, TriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerUpdateManyArgs>(args: SelectSubset<T, TriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers and returns the data updated in the database.
     * @param {TriggerUpdateManyAndReturnArgs} args - Arguments to update many Triggers.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TriggerUpdateManyAndReturnArgs>(args: SelectSubset<T, TriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trigger.
     * @param {TriggerUpsertArgs} args - Arguments to update or create a Trigger.
     * @example
     * // Update or create a Trigger
     * const trigger = await prisma.trigger.upsert({
     *   create: {
     *     // ... data to create a Trigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trigger we want to update
     *   }
     * })
     */
    upsert<T extends TriggerUpsertArgs>(args: SelectSubset<T, TriggerUpsertArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerCountArgs} args - Arguments to filter Triggers to count.
     * @example
     * // Count the number of Triggers
     * const count = await prisma.trigger.count({
     *   where: {
     *     // ... the filter for the Triggers we want to count
     *   }
     * })
    **/
    count<T extends TriggerCountArgs>(
      args?: Subset<T, TriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TriggerAggregateArgs>(args: Subset<T, TriggerAggregateArgs>): Prisma.PrismaPromise<GetTriggerAggregateType<T>>

    /**
     * Group by Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerGroupByArgs['orderBy'] }
        : { orderBy?: TriggerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trigger model
   */
  readonly fields: TriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auto<T extends AutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutoDefaultArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    type<T extends AvailableTriggerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTriggerDefaultArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trigger model
   */
  interface TriggerFieldRefs {
    readonly id: FieldRef<"Trigger", 'String'>
    readonly autoId: FieldRef<"Trigger", 'String'>
    readonly availableTriggerId: FieldRef<"Trigger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trigger findUnique
   */
  export type TriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findUniqueOrThrow
   */
  export type TriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findFirst
   */
  export type TriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findFirstOrThrow
   */
  export type TriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findMany
   */
  export type TriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Triggers to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger create
   */
  export type TriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a Trigger.
     */
    data: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
  }

  /**
   * Trigger createMany
   */
  export type TriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trigger createManyAndReturn
   */
  export type TriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger update
   */
  export type TriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a Trigger.
     */
    data: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
    /**
     * Choose, which Trigger to update.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger updateMany
   */
  export type TriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
  }

  /**
   * Trigger updateManyAndReturn
   */
  export type TriggerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger upsert
   */
  export type TriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the Trigger to update in case it exists.
     */
    where: TriggerWhereUniqueInput
    /**
     * In case the Trigger found by the `where` argument doesn't exist, create a new Trigger with this data.
     */
    create: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
    /**
     * In case the Trigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
  }

  /**
   * Trigger delete
   */
  export type TriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter which Trigger to delete.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger deleteMany
   */
  export type TriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Triggers to delete
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to delete.
     */
    limit?: number
  }

  /**
   * Trigger without action
   */
  export type TriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
  }


  /**
   * Model AvailableTrigger
   */

  export type AggregateAvailableTrigger = {
    _count: AvailableTriggerCountAggregateOutputType | null
    _min: AvailableTriggerMinAggregateOutputType | null
    _max: AvailableTriggerMaxAggregateOutputType | null
  }

  export type AvailableTriggerMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableTriggerMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableTriggerCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AvailableTriggerMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableTriggerMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableTriggerCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AvailableTriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTrigger to aggregate.
     */
    where?: AvailableTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggerOrderByWithRelationInput | AvailableTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableTriggers
    **/
    _count?: true | AvailableTriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableTriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableTriggerMaxAggregateInputType
  }

  export type GetAvailableTriggerAggregateType<T extends AvailableTriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableTrigger[P]>
      : GetScalarType<T[P], AggregateAvailableTrigger[P]>
  }




  export type AvailableTriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableTriggerWhereInput
    orderBy?: AvailableTriggerOrderByWithAggregationInput | AvailableTriggerOrderByWithAggregationInput[]
    by: AvailableTriggerScalarFieldEnum[] | AvailableTriggerScalarFieldEnum
    having?: AvailableTriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableTriggerCountAggregateInputType | true
    _min?: AvailableTriggerMinAggregateInputType
    _max?: AvailableTriggerMaxAggregateInputType
  }

  export type AvailableTriggerGroupByOutputType = {
    id: string
    name: string
    _count: AvailableTriggerCountAggregateOutputType | null
    _min: AvailableTriggerMinAggregateOutputType | null
    _max: AvailableTriggerMaxAggregateOutputType | null
  }

  type GetAvailableTriggerGroupByPayload<T extends AvailableTriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableTriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableTriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableTriggerGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableTriggerGroupByOutputType[P]>
        }
      >
    >


  export type AvailableTriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    triggers?: boolean | AvailableTrigger$triggersArgs<ExtArgs>
    _count?: boolean | AvailableTriggerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableTrigger"]>

  export type AvailableTriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableTrigger"]>

  export type AvailableTriggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableTrigger"]>

  export type AvailableTriggerSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AvailableTriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["availableTrigger"]>
  export type AvailableTriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    triggers?: boolean | AvailableTrigger$triggersArgs<ExtArgs>
    _count?: boolean | AvailableTriggerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableTriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvailableTriggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailableTriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableTrigger"
    objects: {
      triggers: Prisma.$TriggerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["availableTrigger"]>
    composites: {}
  }

  type AvailableTriggerGetPayload<S extends boolean | null | undefined | AvailableTriggerDefaultArgs> = $Result.GetResult<Prisma.$AvailableTriggerPayload, S>

  type AvailableTriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableTriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableTriggerCountAggregateInputType | true
    }

  export interface AvailableTriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableTrigger'], meta: { name: 'AvailableTrigger' } }
    /**
     * Find zero or one AvailableTrigger that matches the filter.
     * @param {AvailableTriggerFindUniqueArgs} args - Arguments to find a AvailableTrigger
     * @example
     * // Get one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableTriggerFindUniqueArgs>(args: SelectSubset<T, AvailableTriggerFindUniqueArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableTrigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableTriggerFindUniqueOrThrowArgs} args - Arguments to find a AvailableTrigger
     * @example
     * // Get one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableTriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableTriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableTrigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerFindFirstArgs} args - Arguments to find a AvailableTrigger
     * @example
     * // Get one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableTriggerFindFirstArgs>(args?: SelectSubset<T, AvailableTriggerFindFirstArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableTrigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerFindFirstOrThrowArgs} args - Arguments to find a AvailableTrigger
     * @example
     * // Get one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableTriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableTriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailableTriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableTriggers
     * const availableTriggers = await prisma.availableTrigger.findMany()
     * 
     * // Get first 10 AvailableTriggers
     * const availableTriggers = await prisma.availableTrigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableTriggerWithIdOnly = await prisma.availableTrigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableTriggerFindManyArgs>(args?: SelectSubset<T, AvailableTriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableTrigger.
     * @param {AvailableTriggerCreateArgs} args - Arguments to create a AvailableTrigger.
     * @example
     * // Create one AvailableTrigger
     * const AvailableTrigger = await prisma.availableTrigger.create({
     *   data: {
     *     // ... data to create a AvailableTrigger
     *   }
     * })
     * 
     */
    create<T extends AvailableTriggerCreateArgs>(args: SelectSubset<T, AvailableTriggerCreateArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailableTriggers.
     * @param {AvailableTriggerCreateManyArgs} args - Arguments to create many AvailableTriggers.
     * @example
     * // Create many AvailableTriggers
     * const availableTrigger = await prisma.availableTrigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableTriggerCreateManyArgs>(args?: SelectSubset<T, AvailableTriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableTriggers and returns the data saved in the database.
     * @param {AvailableTriggerCreateManyAndReturnArgs} args - Arguments to create many AvailableTriggers.
     * @example
     * // Create many AvailableTriggers
     * const availableTrigger = await prisma.availableTrigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableTriggers and only return the `id`
     * const availableTriggerWithIdOnly = await prisma.availableTrigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableTriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableTriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailableTrigger.
     * @param {AvailableTriggerDeleteArgs} args - Arguments to delete one AvailableTrigger.
     * @example
     * // Delete one AvailableTrigger
     * const AvailableTrigger = await prisma.availableTrigger.delete({
     *   where: {
     *     // ... filter to delete one AvailableTrigger
     *   }
     * })
     * 
     */
    delete<T extends AvailableTriggerDeleteArgs>(args: SelectSubset<T, AvailableTriggerDeleteArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableTrigger.
     * @param {AvailableTriggerUpdateArgs} args - Arguments to update one AvailableTrigger.
     * @example
     * // Update one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableTriggerUpdateArgs>(args: SelectSubset<T, AvailableTriggerUpdateArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailableTriggers.
     * @param {AvailableTriggerDeleteManyArgs} args - Arguments to filter AvailableTriggers to delete.
     * @example
     * // Delete a few AvailableTriggers
     * const { count } = await prisma.availableTrigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableTriggerDeleteManyArgs>(args?: SelectSubset<T, AvailableTriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableTriggers
     * const availableTrigger = await prisma.availableTrigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableTriggerUpdateManyArgs>(args: SelectSubset<T, AvailableTriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableTriggers and returns the data updated in the database.
     * @param {AvailableTriggerUpdateManyAndReturnArgs} args - Arguments to update many AvailableTriggers.
     * @example
     * // Update many AvailableTriggers
     * const availableTrigger = await prisma.availableTrigger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailableTriggers and only return the `id`
     * const availableTriggerWithIdOnly = await prisma.availableTrigger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailableTriggerUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailableTriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailableTrigger.
     * @param {AvailableTriggerUpsertArgs} args - Arguments to update or create a AvailableTrigger.
     * @example
     * // Update or create a AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.upsert({
     *   create: {
     *     // ... data to create a AvailableTrigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableTrigger we want to update
     *   }
     * })
     */
    upsert<T extends AvailableTriggerUpsertArgs>(args: SelectSubset<T, AvailableTriggerUpsertArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerCountArgs} args - Arguments to filter AvailableTriggers to count.
     * @example
     * // Count the number of AvailableTriggers
     * const count = await prisma.availableTrigger.count({
     *   where: {
     *     // ... the filter for the AvailableTriggers we want to count
     *   }
     * })
    **/
    count<T extends AvailableTriggerCountArgs>(
      args?: Subset<T, AvailableTriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableTriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableTrigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailableTriggerAggregateArgs>(args: Subset<T, AvailableTriggerAggregateArgs>): Prisma.PrismaPromise<GetAvailableTriggerAggregateType<T>>

    /**
     * Group by AvailableTrigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailableTriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableTriggerGroupByArgs['orderBy'] }
        : { orderBy?: AvailableTriggerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailableTriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableTrigger model
   */
  readonly fields: AvailableTriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableTrigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableTriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    triggers<T extends AvailableTrigger$triggersArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTrigger$triggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AvailableTrigger model
   */
  interface AvailableTriggerFieldRefs {
    readonly id: FieldRef<"AvailableTrigger", 'String'>
    readonly name: FieldRef<"AvailableTrigger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableTrigger findUnique
   */
  export type AvailableTriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTrigger to fetch.
     */
    where: AvailableTriggerWhereUniqueInput
  }

  /**
   * AvailableTrigger findUniqueOrThrow
   */
  export type AvailableTriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTrigger to fetch.
     */
    where: AvailableTriggerWhereUniqueInput
  }

  /**
   * AvailableTrigger findFirst
   */
  export type AvailableTriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTrigger to fetch.
     */
    where?: AvailableTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggerOrderByWithRelationInput | AvailableTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTriggers.
     */
    cursor?: AvailableTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTriggers.
     */
    distinct?: AvailableTriggerScalarFieldEnum | AvailableTriggerScalarFieldEnum[]
  }

  /**
   * AvailableTrigger findFirstOrThrow
   */
  export type AvailableTriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTrigger to fetch.
     */
    where?: AvailableTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggerOrderByWithRelationInput | AvailableTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTriggers.
     */
    cursor?: AvailableTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTriggers.
     */
    distinct?: AvailableTriggerScalarFieldEnum | AvailableTriggerScalarFieldEnum[]
  }

  /**
   * AvailableTrigger findMany
   */
  export type AvailableTriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where?: AvailableTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggerOrderByWithRelationInput | AvailableTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableTriggers.
     */
    cursor?: AvailableTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    distinct?: AvailableTriggerScalarFieldEnum | AvailableTriggerScalarFieldEnum[]
  }

  /**
   * AvailableTrigger create
   */
  export type AvailableTriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableTrigger.
     */
    data: XOR<AvailableTriggerCreateInput, AvailableTriggerUncheckedCreateInput>
  }

  /**
   * AvailableTrigger createMany
   */
  export type AvailableTriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableTriggers.
     */
    data: AvailableTriggerCreateManyInput | AvailableTriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableTrigger createManyAndReturn
   */
  export type AvailableTriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * The data used to create many AvailableTriggers.
     */
    data: AvailableTriggerCreateManyInput | AvailableTriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableTrigger update
   */
  export type AvailableTriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableTrigger.
     */
    data: XOR<AvailableTriggerUpdateInput, AvailableTriggerUncheckedUpdateInput>
    /**
     * Choose, which AvailableTrigger to update.
     */
    where: AvailableTriggerWhereUniqueInput
  }

  /**
   * AvailableTrigger updateMany
   */
  export type AvailableTriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableTriggers.
     */
    data: XOR<AvailableTriggerUpdateManyMutationInput, AvailableTriggerUncheckedUpdateManyInput>
    /**
     * Filter which AvailableTriggers to update
     */
    where?: AvailableTriggerWhereInput
    /**
     * Limit how many AvailableTriggers to update.
     */
    limit?: number
  }

  /**
   * AvailableTrigger updateManyAndReturn
   */
  export type AvailableTriggerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * The data used to update AvailableTriggers.
     */
    data: XOR<AvailableTriggerUpdateManyMutationInput, AvailableTriggerUncheckedUpdateManyInput>
    /**
     * Filter which AvailableTriggers to update
     */
    where?: AvailableTriggerWhereInput
    /**
     * Limit how many AvailableTriggers to update.
     */
    limit?: number
  }

  /**
   * AvailableTrigger upsert
   */
  export type AvailableTriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableTrigger to update in case it exists.
     */
    where: AvailableTriggerWhereUniqueInput
    /**
     * In case the AvailableTrigger found by the `where` argument doesn't exist, create a new AvailableTrigger with this data.
     */
    create: XOR<AvailableTriggerCreateInput, AvailableTriggerUncheckedCreateInput>
    /**
     * In case the AvailableTrigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableTriggerUpdateInput, AvailableTriggerUncheckedUpdateInput>
  }

  /**
   * AvailableTrigger delete
   */
  export type AvailableTriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter which AvailableTrigger to delete.
     */
    where: AvailableTriggerWhereUniqueInput
  }

  /**
   * AvailableTrigger deleteMany
   */
  export type AvailableTriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTriggers to delete
     */
    where?: AvailableTriggerWhereInput
    /**
     * Limit how many AvailableTriggers to delete.
     */
    limit?: number
  }

  /**
   * AvailableTrigger.triggers
   */
  export type AvailableTrigger$triggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    cursor?: TriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * AvailableTrigger without action
   */
  export type AvailableTriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
  }


  /**
   * Model Action
   */

  export type AggregateAction = {
    _count: ActionCountAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  export type ActionMinAggregateOutputType = {
    id: string | null
    autoId: string | null
    availableActionId: string | null
  }

  export type ActionMaxAggregateOutputType = {
    id: string | null
    autoId: string | null
    availableActionId: string | null
  }

  export type ActionCountAggregateOutputType = {
    id: number
    autoId: number
    availableActionId: number
    _all: number
  }


  export type ActionMinAggregateInputType = {
    id?: true
    autoId?: true
    availableActionId?: true
  }

  export type ActionMaxAggregateInputType = {
    id?: true
    autoId?: true
    availableActionId?: true
  }

  export type ActionCountAggregateInputType = {
    id?: true
    autoId?: true
    availableActionId?: true
    _all?: true
  }

  export type ActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Action to aggregate.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actions
    **/
    _count?: true | ActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionMaxAggregateInputType
  }

  export type GetActionAggregateType<T extends ActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAction[P]>
      : GetScalarType<T[P], AggregateAction[P]>
  }




  export type ActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithAggregationInput | ActionOrderByWithAggregationInput[]
    by: ActionScalarFieldEnum[] | ActionScalarFieldEnum
    having?: ActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionCountAggregateInputType | true
    _min?: ActionMinAggregateInputType
    _max?: ActionMaxAggregateInputType
  }

  export type ActionGroupByOutputType = {
    id: string
    autoId: string
    availableActionId: string
    _count: ActionCountAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  type GetActionGroupByPayload<T extends ActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionGroupByOutputType[P]>
            : GetScalarType<T[P], ActionGroupByOutputType[P]>
        }
      >
    >


  export type ActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autoId?: boolean
    availableActionId?: boolean
    auto?: boolean | AutoDefaultArgs<ExtArgs>
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autoId?: boolean
    availableActionId?: boolean
    auto?: boolean | AutoDefaultArgs<ExtArgs>
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autoId?: boolean
    availableActionId?: boolean
    auto?: boolean | AutoDefaultArgs<ExtArgs>
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectScalar = {
    id?: boolean
    autoId?: boolean
    availableActionId?: boolean
  }

  export type ActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "autoId" | "availableActionId", ExtArgs["result"]["action"]>
  export type ActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auto?: boolean | AutoDefaultArgs<ExtArgs>
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
  }
  export type ActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auto?: boolean | AutoDefaultArgs<ExtArgs>
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
  }
  export type ActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auto?: boolean | AutoDefaultArgs<ExtArgs>
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
  }

  export type $ActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Action"
    objects: {
      auto: Prisma.$AutoPayload<ExtArgs>
      type: Prisma.$AvailableActionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      autoId: string
      availableActionId: string
    }, ExtArgs["result"]["action"]>
    composites: {}
  }

  type ActionGetPayload<S extends boolean | null | undefined | ActionDefaultArgs> = $Result.GetResult<Prisma.$ActionPayload, S>

  type ActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionCountAggregateInputType | true
    }

  export interface ActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Action'], meta: { name: 'Action' } }
    /**
     * Find zero or one Action that matches the filter.
     * @param {ActionFindUniqueArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFindUniqueArgs>(args: SelectSubset<T, ActionFindUniqueArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Action that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionFindUniqueOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFindFirstArgs>(args?: SelectSubset<T, ActionFindFirstArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.action.findMany()
     * 
     * // Get first 10 Actions
     * const actions = await prisma.action.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionWithIdOnly = await prisma.action.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionFindManyArgs>(args?: SelectSubset<T, ActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Action.
     * @param {ActionCreateArgs} args - Arguments to create a Action.
     * @example
     * // Create one Action
     * const Action = await prisma.action.create({
     *   data: {
     *     // ... data to create a Action
     *   }
     * })
     * 
     */
    create<T extends ActionCreateArgs>(args: SelectSubset<T, ActionCreateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actions.
     * @param {ActionCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionCreateManyArgs>(args?: SelectSubset<T, ActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actions and returns the data saved in the database.
     * @param {ActionCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Action.
     * @param {ActionDeleteArgs} args - Arguments to delete one Action.
     * @example
     * // Delete one Action
     * const Action = await prisma.action.delete({
     *   where: {
     *     // ... filter to delete one Action
     *   }
     * })
     * 
     */
    delete<T extends ActionDeleteArgs>(args: SelectSubset<T, ActionDeleteArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Action.
     * @param {ActionUpdateArgs} args - Arguments to update one Action.
     * @example
     * // Update one Action
     * const action = await prisma.action.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionUpdateArgs>(args: SelectSubset<T, ActionUpdateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actions.
     * @param {ActionDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.action.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionDeleteManyArgs>(args?: SelectSubset<T, ActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionUpdateManyArgs>(args: SelectSubset<T, ActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions and returns the data updated in the database.
     * @param {ActionUpdateManyAndReturnArgs} args - Arguments to update many Actions.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActionUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Action.
     * @param {ActionUpsertArgs} args - Arguments to update or create a Action.
     * @example
     * // Update or create a Action
     * const action = await prisma.action.upsert({
     *   create: {
     *     // ... data to create a Action
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Action we want to update
     *   }
     * })
     */
    upsert<T extends ActionUpsertArgs>(args: SelectSubset<T, ActionUpsertArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.action.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
    **/
    count<T extends ActionCountArgs>(
      args?: Subset<T, ActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionAggregateArgs>(args: Subset<T, ActionAggregateArgs>): Prisma.PrismaPromise<GetActionAggregateType<T>>

    /**
     * Group by Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionGroupByArgs['orderBy'] }
        : { orderBy?: ActionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Action model
   */
  readonly fields: ActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Action.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auto<T extends AutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutoDefaultArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    type<T extends AvailableActionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableActionDefaultArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Action model
   */
  interface ActionFieldRefs {
    readonly id: FieldRef<"Action", 'String'>
    readonly autoId: FieldRef<"Action", 'String'>
    readonly availableActionId: FieldRef<"Action", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Action findUnique
   */
  export type ActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findUniqueOrThrow
   */
  export type ActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findFirst
   */
  export type ActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findFirstOrThrow
   */
  export type ActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findMany
   */
  export type ActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action create
   */
  export type ActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to create a Action.
     */
    data: XOR<ActionCreateInput, ActionUncheckedCreateInput>
  }

  /**
   * Action createMany
   */
  export type ActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Action createManyAndReturn
   */
  export type ActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action update
   */
  export type ActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to update a Action.
     */
    data: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
    /**
     * Choose, which Action to update.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action updateMany
   */
  export type ActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
  }

  /**
   * Action updateManyAndReturn
   */
  export type ActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action upsert
   */
  export type ActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The filter to search for the Action to update in case it exists.
     */
    where: ActionWhereUniqueInput
    /**
     * In case the Action found by the `where` argument doesn't exist, create a new Action with this data.
     */
    create: XOR<ActionCreateInput, ActionUncheckedCreateInput>
    /**
     * In case the Action was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
  }

  /**
   * Action delete
   */
  export type ActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter which Action to delete.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action deleteMany
   */
  export type ActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actions to delete
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to delete.
     */
    limit?: number
  }

  /**
   * Action without action
   */
  export type ActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
  }


  /**
   * Model AvailableAction
   */

  export type AggregateAvailableAction = {
    _count: AvailableActionCountAggregateOutputType | null
    _min: AvailableActionMinAggregateOutputType | null
    _max: AvailableActionMaxAggregateOutputType | null
  }

  export type AvailableActionMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableActionMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableActionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AvailableActionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableActionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableActionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AvailableActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableAction to aggregate.
     */
    where?: AvailableActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionOrderByWithRelationInput | AvailableActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableActions
    **/
    _count?: true | AvailableActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableActionMaxAggregateInputType
  }

  export type GetAvailableActionAggregateType<T extends AvailableActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableAction[P]>
      : GetScalarType<T[P], AggregateAvailableAction[P]>
  }




  export type AvailableActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableActionWhereInput
    orderBy?: AvailableActionOrderByWithAggregationInput | AvailableActionOrderByWithAggregationInput[]
    by: AvailableActionScalarFieldEnum[] | AvailableActionScalarFieldEnum
    having?: AvailableActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableActionCountAggregateInputType | true
    _min?: AvailableActionMinAggregateInputType
    _max?: AvailableActionMaxAggregateInputType
  }

  export type AvailableActionGroupByOutputType = {
    id: string
    name: string
    _count: AvailableActionCountAggregateOutputType | null
    _min: AvailableActionMinAggregateOutputType | null
    _max: AvailableActionMaxAggregateOutputType | null
  }

  type GetAvailableActionGroupByPayload<T extends AvailableActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableActionGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableActionGroupByOutputType[P]>
        }
      >
    >


  export type AvailableActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    actions?: boolean | AvailableAction$actionsArgs<ExtArgs>
    _count?: boolean | AvailableActionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableAction"]>

  export type AvailableActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableAction"]>

  export type AvailableActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableAction"]>

  export type AvailableActionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AvailableActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["availableAction"]>
  export type AvailableActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | AvailableAction$actionsArgs<ExtArgs>
    _count?: boolean | AvailableActionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvailableActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailableActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableAction"
    objects: {
      actions: Prisma.$ActionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["availableAction"]>
    composites: {}
  }

  type AvailableActionGetPayload<S extends boolean | null | undefined | AvailableActionDefaultArgs> = $Result.GetResult<Prisma.$AvailableActionPayload, S>

  type AvailableActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableActionCountAggregateInputType | true
    }

  export interface AvailableActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableAction'], meta: { name: 'AvailableAction' } }
    /**
     * Find zero or one AvailableAction that matches the filter.
     * @param {AvailableActionFindUniqueArgs} args - Arguments to find a AvailableAction
     * @example
     * // Get one AvailableAction
     * const availableAction = await prisma.availableAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableActionFindUniqueArgs>(args: SelectSubset<T, AvailableActionFindUniqueArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableActionFindUniqueOrThrowArgs} args - Arguments to find a AvailableAction
     * @example
     * // Get one AvailableAction
     * const availableAction = await prisma.availableAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableActionFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionFindFirstArgs} args - Arguments to find a AvailableAction
     * @example
     * // Get one AvailableAction
     * const availableAction = await prisma.availableAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableActionFindFirstArgs>(args?: SelectSubset<T, AvailableActionFindFirstArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionFindFirstOrThrowArgs} args - Arguments to find a AvailableAction
     * @example
     * // Get one AvailableAction
     * const availableAction = await prisma.availableAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableActionFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailableActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableActions
     * const availableActions = await prisma.availableAction.findMany()
     * 
     * // Get first 10 AvailableActions
     * const availableActions = await prisma.availableAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableActionWithIdOnly = await prisma.availableAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableActionFindManyArgs>(args?: SelectSubset<T, AvailableActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableAction.
     * @param {AvailableActionCreateArgs} args - Arguments to create a AvailableAction.
     * @example
     * // Create one AvailableAction
     * const AvailableAction = await prisma.availableAction.create({
     *   data: {
     *     // ... data to create a AvailableAction
     *   }
     * })
     * 
     */
    create<T extends AvailableActionCreateArgs>(args: SelectSubset<T, AvailableActionCreateArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailableActions.
     * @param {AvailableActionCreateManyArgs} args - Arguments to create many AvailableActions.
     * @example
     * // Create many AvailableActions
     * const availableAction = await prisma.availableAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableActionCreateManyArgs>(args?: SelectSubset<T, AvailableActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableActions and returns the data saved in the database.
     * @param {AvailableActionCreateManyAndReturnArgs} args - Arguments to create many AvailableActions.
     * @example
     * // Create many AvailableActions
     * const availableAction = await prisma.availableAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableActions and only return the `id`
     * const availableActionWithIdOnly = await prisma.availableAction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableActionCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailableAction.
     * @param {AvailableActionDeleteArgs} args - Arguments to delete one AvailableAction.
     * @example
     * // Delete one AvailableAction
     * const AvailableAction = await prisma.availableAction.delete({
     *   where: {
     *     // ... filter to delete one AvailableAction
     *   }
     * })
     * 
     */
    delete<T extends AvailableActionDeleteArgs>(args: SelectSubset<T, AvailableActionDeleteArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableAction.
     * @param {AvailableActionUpdateArgs} args - Arguments to update one AvailableAction.
     * @example
     * // Update one AvailableAction
     * const availableAction = await prisma.availableAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableActionUpdateArgs>(args: SelectSubset<T, AvailableActionUpdateArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailableActions.
     * @param {AvailableActionDeleteManyArgs} args - Arguments to filter AvailableActions to delete.
     * @example
     * // Delete a few AvailableActions
     * const { count } = await prisma.availableAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableActionDeleteManyArgs>(args?: SelectSubset<T, AvailableActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableActions
     * const availableAction = await prisma.availableAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableActionUpdateManyArgs>(args: SelectSubset<T, AvailableActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableActions and returns the data updated in the database.
     * @param {AvailableActionUpdateManyAndReturnArgs} args - Arguments to update many AvailableActions.
     * @example
     * // Update many AvailableActions
     * const availableAction = await prisma.availableAction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailableActions and only return the `id`
     * const availableActionWithIdOnly = await prisma.availableAction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailableActionUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailableActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailableAction.
     * @param {AvailableActionUpsertArgs} args - Arguments to update or create a AvailableAction.
     * @example
     * // Update or create a AvailableAction
     * const availableAction = await prisma.availableAction.upsert({
     *   create: {
     *     // ... data to create a AvailableAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableAction we want to update
     *   }
     * })
     */
    upsert<T extends AvailableActionUpsertArgs>(args: SelectSubset<T, AvailableActionUpsertArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionCountArgs} args - Arguments to filter AvailableActions to count.
     * @example
     * // Count the number of AvailableActions
     * const count = await prisma.availableAction.count({
     *   where: {
     *     // ... the filter for the AvailableActions we want to count
     *   }
     * })
    **/
    count<T extends AvailableActionCountArgs>(
      args?: Subset<T, AvailableActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailableActionAggregateArgs>(args: Subset<T, AvailableActionAggregateArgs>): Prisma.PrismaPromise<GetAvailableActionAggregateType<T>>

    /**
     * Group by AvailableAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailableActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableActionGroupByArgs['orderBy'] }
        : { orderBy?: AvailableActionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailableActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableAction model
   */
  readonly fields: AvailableActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actions<T extends AvailableAction$actionsArgs<ExtArgs> = {}>(args?: Subset<T, AvailableAction$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AvailableAction model
   */
  interface AvailableActionFieldRefs {
    readonly id: FieldRef<"AvailableAction", 'String'>
    readonly name: FieldRef<"AvailableAction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableAction findUnique
   */
  export type AvailableActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAction to fetch.
     */
    where: AvailableActionWhereUniqueInput
  }

  /**
   * AvailableAction findUniqueOrThrow
   */
  export type AvailableActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAction to fetch.
     */
    where: AvailableActionWhereUniqueInput
  }

  /**
   * AvailableAction findFirst
   */
  export type AvailableActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAction to fetch.
     */
    where?: AvailableActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionOrderByWithRelationInput | AvailableActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableActions.
     */
    cursor?: AvailableActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableActions.
     */
    distinct?: AvailableActionScalarFieldEnum | AvailableActionScalarFieldEnum[]
  }

  /**
   * AvailableAction findFirstOrThrow
   */
  export type AvailableActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAction to fetch.
     */
    where?: AvailableActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionOrderByWithRelationInput | AvailableActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableActions.
     */
    cursor?: AvailableActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableActions.
     */
    distinct?: AvailableActionScalarFieldEnum | AvailableActionScalarFieldEnum[]
  }

  /**
   * AvailableAction findMany
   */
  export type AvailableActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where?: AvailableActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionOrderByWithRelationInput | AvailableActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableActions.
     */
    cursor?: AvailableActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    distinct?: AvailableActionScalarFieldEnum | AvailableActionScalarFieldEnum[]
  }

  /**
   * AvailableAction create
   */
  export type AvailableActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableAction.
     */
    data: XOR<AvailableActionCreateInput, AvailableActionUncheckedCreateInput>
  }

  /**
   * AvailableAction createMany
   */
  export type AvailableActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableActions.
     */
    data: AvailableActionCreateManyInput | AvailableActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableAction createManyAndReturn
   */
  export type AvailableActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * The data used to create many AvailableActions.
     */
    data: AvailableActionCreateManyInput | AvailableActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableAction update
   */
  export type AvailableActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableAction.
     */
    data: XOR<AvailableActionUpdateInput, AvailableActionUncheckedUpdateInput>
    /**
     * Choose, which AvailableAction to update.
     */
    where: AvailableActionWhereUniqueInput
  }

  /**
   * AvailableAction updateMany
   */
  export type AvailableActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableActions.
     */
    data: XOR<AvailableActionUpdateManyMutationInput, AvailableActionUncheckedUpdateManyInput>
    /**
     * Filter which AvailableActions to update
     */
    where?: AvailableActionWhereInput
    /**
     * Limit how many AvailableActions to update.
     */
    limit?: number
  }

  /**
   * AvailableAction updateManyAndReturn
   */
  export type AvailableActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * The data used to update AvailableActions.
     */
    data: XOR<AvailableActionUpdateManyMutationInput, AvailableActionUncheckedUpdateManyInput>
    /**
     * Filter which AvailableActions to update
     */
    where?: AvailableActionWhereInput
    /**
     * Limit how many AvailableActions to update.
     */
    limit?: number
  }

  /**
   * AvailableAction upsert
   */
  export type AvailableActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableAction to update in case it exists.
     */
    where: AvailableActionWhereUniqueInput
    /**
     * In case the AvailableAction found by the `where` argument doesn't exist, create a new AvailableAction with this data.
     */
    create: XOR<AvailableActionCreateInput, AvailableActionUncheckedCreateInput>
    /**
     * In case the AvailableAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableActionUpdateInput, AvailableActionUncheckedUpdateInput>
  }

  /**
   * AvailableAction delete
   */
  export type AvailableActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter which AvailableAction to delete.
     */
    where: AvailableActionWhereUniqueInput
  }

  /**
   * AvailableAction deleteMany
   */
  export type AvailableActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableActions to delete
     */
    where?: AvailableActionWhereInput
    /**
     * Limit how many AvailableActions to delete.
     */
    limit?: number
  }

  /**
   * AvailableAction.actions
   */
  export type AvailableAction$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * AvailableAction without action
   */
  export type AvailableActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
  }


  /**
   * Model AutoRun
   */

  export type AggregateAutoRun = {
    _count: AutoRunCountAggregateOutputType | null
    _min: AutoRunMinAggregateOutputType | null
    _max: AutoRunMaxAggregateOutputType | null
  }

  export type AutoRunMinAggregateOutputType = {
    id: string | null
    autoId: string | null
  }

  export type AutoRunMaxAggregateOutputType = {
    id: string | null
    autoId: string | null
  }

  export type AutoRunCountAggregateOutputType = {
    id: number
    autoId: number
    metadata: number
    _all: number
  }


  export type AutoRunMinAggregateInputType = {
    id?: true
    autoId?: true
  }

  export type AutoRunMaxAggregateInputType = {
    id?: true
    autoId?: true
  }

  export type AutoRunCountAggregateInputType = {
    id?: true
    autoId?: true
    metadata?: true
    _all?: true
  }

  export type AutoRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutoRun to aggregate.
     */
    where?: AutoRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoRuns to fetch.
     */
    orderBy?: AutoRunOrderByWithRelationInput | AutoRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutoRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AutoRuns
    **/
    _count?: true | AutoRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutoRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutoRunMaxAggregateInputType
  }

  export type GetAutoRunAggregateType<T extends AutoRunAggregateArgs> = {
        [P in keyof T & keyof AggregateAutoRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutoRun[P]>
      : GetScalarType<T[P], AggregateAutoRun[P]>
  }




  export type AutoRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutoRunWhereInput
    orderBy?: AutoRunOrderByWithAggregationInput | AutoRunOrderByWithAggregationInput[]
    by: AutoRunScalarFieldEnum[] | AutoRunScalarFieldEnum
    having?: AutoRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutoRunCountAggregateInputType | true
    _min?: AutoRunMinAggregateInputType
    _max?: AutoRunMaxAggregateInputType
  }

  export type AutoRunGroupByOutputType = {
    id: string
    autoId: string
    metadata: JsonValue | null
    _count: AutoRunCountAggregateOutputType | null
    _min: AutoRunMinAggregateOutputType | null
    _max: AutoRunMaxAggregateOutputType | null
  }

  type GetAutoRunGroupByPayload<T extends AutoRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutoRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutoRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutoRunGroupByOutputType[P]>
            : GetScalarType<T[P], AutoRunGroupByOutputType[P]>
        }
      >
    >


  export type AutoRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autoId?: boolean
    metadata?: boolean
    auto?: boolean | AutoDefaultArgs<ExtArgs>
    autoRunOutbox?: boolean | AutoRun$autoRunOutboxArgs<ExtArgs>
  }, ExtArgs["result"]["autoRun"]>

  export type AutoRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autoId?: boolean
    metadata?: boolean
    auto?: boolean | AutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autoRun"]>

  export type AutoRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autoId?: boolean
    metadata?: boolean
    auto?: boolean | AutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autoRun"]>

  export type AutoRunSelectScalar = {
    id?: boolean
    autoId?: boolean
    metadata?: boolean
  }

  export type AutoRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "autoId" | "metadata", ExtArgs["result"]["autoRun"]>
  export type AutoRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auto?: boolean | AutoDefaultArgs<ExtArgs>
    autoRunOutbox?: boolean | AutoRun$autoRunOutboxArgs<ExtArgs>
  }
  export type AutoRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auto?: boolean | AutoDefaultArgs<ExtArgs>
  }
  export type AutoRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auto?: boolean | AutoDefaultArgs<ExtArgs>
  }

  export type $AutoRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AutoRun"
    objects: {
      auto: Prisma.$AutoPayload<ExtArgs>
      autoRunOutbox: Prisma.$AutoRunOutboxPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      autoId: string
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["autoRun"]>
    composites: {}
  }

  type AutoRunGetPayload<S extends boolean | null | undefined | AutoRunDefaultArgs> = $Result.GetResult<Prisma.$AutoRunPayload, S>

  type AutoRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutoRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutoRunCountAggregateInputType | true
    }

  export interface AutoRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AutoRun'], meta: { name: 'AutoRun' } }
    /**
     * Find zero or one AutoRun that matches the filter.
     * @param {AutoRunFindUniqueArgs} args - Arguments to find a AutoRun
     * @example
     * // Get one AutoRun
     * const autoRun = await prisma.autoRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutoRunFindUniqueArgs>(args: SelectSubset<T, AutoRunFindUniqueArgs<ExtArgs>>): Prisma__AutoRunClient<$Result.GetResult<Prisma.$AutoRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AutoRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutoRunFindUniqueOrThrowArgs} args - Arguments to find a AutoRun
     * @example
     * // Get one AutoRun
     * const autoRun = await prisma.autoRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutoRunFindUniqueOrThrowArgs>(args: SelectSubset<T, AutoRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutoRunClient<$Result.GetResult<Prisma.$AutoRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AutoRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRunFindFirstArgs} args - Arguments to find a AutoRun
     * @example
     * // Get one AutoRun
     * const autoRun = await prisma.autoRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutoRunFindFirstArgs>(args?: SelectSubset<T, AutoRunFindFirstArgs<ExtArgs>>): Prisma__AutoRunClient<$Result.GetResult<Prisma.$AutoRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AutoRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRunFindFirstOrThrowArgs} args - Arguments to find a AutoRun
     * @example
     * // Get one AutoRun
     * const autoRun = await prisma.autoRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutoRunFindFirstOrThrowArgs>(args?: SelectSubset<T, AutoRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutoRunClient<$Result.GetResult<Prisma.$AutoRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AutoRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AutoRuns
     * const autoRuns = await prisma.autoRun.findMany()
     * 
     * // Get first 10 AutoRuns
     * const autoRuns = await prisma.autoRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autoRunWithIdOnly = await prisma.autoRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutoRunFindManyArgs>(args?: SelectSubset<T, AutoRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AutoRun.
     * @param {AutoRunCreateArgs} args - Arguments to create a AutoRun.
     * @example
     * // Create one AutoRun
     * const AutoRun = await prisma.autoRun.create({
     *   data: {
     *     // ... data to create a AutoRun
     *   }
     * })
     * 
     */
    create<T extends AutoRunCreateArgs>(args: SelectSubset<T, AutoRunCreateArgs<ExtArgs>>): Prisma__AutoRunClient<$Result.GetResult<Prisma.$AutoRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AutoRuns.
     * @param {AutoRunCreateManyArgs} args - Arguments to create many AutoRuns.
     * @example
     * // Create many AutoRuns
     * const autoRun = await prisma.autoRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutoRunCreateManyArgs>(args?: SelectSubset<T, AutoRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AutoRuns and returns the data saved in the database.
     * @param {AutoRunCreateManyAndReturnArgs} args - Arguments to create many AutoRuns.
     * @example
     * // Create many AutoRuns
     * const autoRun = await prisma.autoRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AutoRuns and only return the `id`
     * const autoRunWithIdOnly = await prisma.autoRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutoRunCreateManyAndReturnArgs>(args?: SelectSubset<T, AutoRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AutoRun.
     * @param {AutoRunDeleteArgs} args - Arguments to delete one AutoRun.
     * @example
     * // Delete one AutoRun
     * const AutoRun = await prisma.autoRun.delete({
     *   where: {
     *     // ... filter to delete one AutoRun
     *   }
     * })
     * 
     */
    delete<T extends AutoRunDeleteArgs>(args: SelectSubset<T, AutoRunDeleteArgs<ExtArgs>>): Prisma__AutoRunClient<$Result.GetResult<Prisma.$AutoRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AutoRun.
     * @param {AutoRunUpdateArgs} args - Arguments to update one AutoRun.
     * @example
     * // Update one AutoRun
     * const autoRun = await prisma.autoRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutoRunUpdateArgs>(args: SelectSubset<T, AutoRunUpdateArgs<ExtArgs>>): Prisma__AutoRunClient<$Result.GetResult<Prisma.$AutoRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AutoRuns.
     * @param {AutoRunDeleteManyArgs} args - Arguments to filter AutoRuns to delete.
     * @example
     * // Delete a few AutoRuns
     * const { count } = await prisma.autoRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutoRunDeleteManyArgs>(args?: SelectSubset<T, AutoRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutoRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AutoRuns
     * const autoRun = await prisma.autoRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutoRunUpdateManyArgs>(args: SelectSubset<T, AutoRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutoRuns and returns the data updated in the database.
     * @param {AutoRunUpdateManyAndReturnArgs} args - Arguments to update many AutoRuns.
     * @example
     * // Update many AutoRuns
     * const autoRun = await prisma.autoRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AutoRuns and only return the `id`
     * const autoRunWithIdOnly = await prisma.autoRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AutoRunUpdateManyAndReturnArgs>(args: SelectSubset<T, AutoRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AutoRun.
     * @param {AutoRunUpsertArgs} args - Arguments to update or create a AutoRun.
     * @example
     * // Update or create a AutoRun
     * const autoRun = await prisma.autoRun.upsert({
     *   create: {
     *     // ... data to create a AutoRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AutoRun we want to update
     *   }
     * })
     */
    upsert<T extends AutoRunUpsertArgs>(args: SelectSubset<T, AutoRunUpsertArgs<ExtArgs>>): Prisma__AutoRunClient<$Result.GetResult<Prisma.$AutoRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AutoRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRunCountArgs} args - Arguments to filter AutoRuns to count.
     * @example
     * // Count the number of AutoRuns
     * const count = await prisma.autoRun.count({
     *   where: {
     *     // ... the filter for the AutoRuns we want to count
     *   }
     * })
    **/
    count<T extends AutoRunCountArgs>(
      args?: Subset<T, AutoRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutoRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AutoRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AutoRunAggregateArgs>(args: Subset<T, AutoRunAggregateArgs>): Prisma.PrismaPromise<GetAutoRunAggregateType<T>>

    /**
     * Group by AutoRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AutoRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutoRunGroupByArgs['orderBy'] }
        : { orderBy?: AutoRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AutoRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutoRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AutoRun model
   */
  readonly fields: AutoRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AutoRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutoRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auto<T extends AutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutoDefaultArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    autoRunOutbox<T extends AutoRun$autoRunOutboxArgs<ExtArgs> = {}>(args?: Subset<T, AutoRun$autoRunOutboxArgs<ExtArgs>>): Prisma__AutoRunOutboxClient<$Result.GetResult<Prisma.$AutoRunOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AutoRun model
   */
  interface AutoRunFieldRefs {
    readonly id: FieldRef<"AutoRun", 'String'>
    readonly autoId: FieldRef<"AutoRun", 'String'>
    readonly metadata: FieldRef<"AutoRun", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * AutoRun findUnique
   */
  export type AutoRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRun
     */
    select?: AutoRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRun
     */
    omit?: AutoRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunInclude<ExtArgs> | null
    /**
     * Filter, which AutoRun to fetch.
     */
    where: AutoRunWhereUniqueInput
  }

  /**
   * AutoRun findUniqueOrThrow
   */
  export type AutoRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRun
     */
    select?: AutoRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRun
     */
    omit?: AutoRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunInclude<ExtArgs> | null
    /**
     * Filter, which AutoRun to fetch.
     */
    where: AutoRunWhereUniqueInput
  }

  /**
   * AutoRun findFirst
   */
  export type AutoRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRun
     */
    select?: AutoRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRun
     */
    omit?: AutoRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunInclude<ExtArgs> | null
    /**
     * Filter, which AutoRun to fetch.
     */
    where?: AutoRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoRuns to fetch.
     */
    orderBy?: AutoRunOrderByWithRelationInput | AutoRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutoRuns.
     */
    cursor?: AutoRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutoRuns.
     */
    distinct?: AutoRunScalarFieldEnum | AutoRunScalarFieldEnum[]
  }

  /**
   * AutoRun findFirstOrThrow
   */
  export type AutoRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRun
     */
    select?: AutoRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRun
     */
    omit?: AutoRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunInclude<ExtArgs> | null
    /**
     * Filter, which AutoRun to fetch.
     */
    where?: AutoRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoRuns to fetch.
     */
    orderBy?: AutoRunOrderByWithRelationInput | AutoRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutoRuns.
     */
    cursor?: AutoRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutoRuns.
     */
    distinct?: AutoRunScalarFieldEnum | AutoRunScalarFieldEnum[]
  }

  /**
   * AutoRun findMany
   */
  export type AutoRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRun
     */
    select?: AutoRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRun
     */
    omit?: AutoRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunInclude<ExtArgs> | null
    /**
     * Filter, which AutoRuns to fetch.
     */
    where?: AutoRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoRuns to fetch.
     */
    orderBy?: AutoRunOrderByWithRelationInput | AutoRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AutoRuns.
     */
    cursor?: AutoRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoRuns.
     */
    skip?: number
    distinct?: AutoRunScalarFieldEnum | AutoRunScalarFieldEnum[]
  }

  /**
   * AutoRun create
   */
  export type AutoRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRun
     */
    select?: AutoRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRun
     */
    omit?: AutoRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunInclude<ExtArgs> | null
    /**
     * The data needed to create a AutoRun.
     */
    data: XOR<AutoRunCreateInput, AutoRunUncheckedCreateInput>
  }

  /**
   * AutoRun createMany
   */
  export type AutoRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AutoRuns.
     */
    data: AutoRunCreateManyInput | AutoRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AutoRun createManyAndReturn
   */
  export type AutoRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRun
     */
    select?: AutoRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRun
     */
    omit?: AutoRunOmit<ExtArgs> | null
    /**
     * The data used to create many AutoRuns.
     */
    data: AutoRunCreateManyInput | AutoRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AutoRun update
   */
  export type AutoRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRun
     */
    select?: AutoRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRun
     */
    omit?: AutoRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunInclude<ExtArgs> | null
    /**
     * The data needed to update a AutoRun.
     */
    data: XOR<AutoRunUpdateInput, AutoRunUncheckedUpdateInput>
    /**
     * Choose, which AutoRun to update.
     */
    where: AutoRunWhereUniqueInput
  }

  /**
   * AutoRun updateMany
   */
  export type AutoRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AutoRuns.
     */
    data: XOR<AutoRunUpdateManyMutationInput, AutoRunUncheckedUpdateManyInput>
    /**
     * Filter which AutoRuns to update
     */
    where?: AutoRunWhereInput
    /**
     * Limit how many AutoRuns to update.
     */
    limit?: number
  }

  /**
   * AutoRun updateManyAndReturn
   */
  export type AutoRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRun
     */
    select?: AutoRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRun
     */
    omit?: AutoRunOmit<ExtArgs> | null
    /**
     * The data used to update AutoRuns.
     */
    data: XOR<AutoRunUpdateManyMutationInput, AutoRunUncheckedUpdateManyInput>
    /**
     * Filter which AutoRuns to update
     */
    where?: AutoRunWhereInput
    /**
     * Limit how many AutoRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AutoRun upsert
   */
  export type AutoRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRun
     */
    select?: AutoRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRun
     */
    omit?: AutoRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunInclude<ExtArgs> | null
    /**
     * The filter to search for the AutoRun to update in case it exists.
     */
    where: AutoRunWhereUniqueInput
    /**
     * In case the AutoRun found by the `where` argument doesn't exist, create a new AutoRun with this data.
     */
    create: XOR<AutoRunCreateInput, AutoRunUncheckedCreateInput>
    /**
     * In case the AutoRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutoRunUpdateInput, AutoRunUncheckedUpdateInput>
  }

  /**
   * AutoRun delete
   */
  export type AutoRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRun
     */
    select?: AutoRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRun
     */
    omit?: AutoRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunInclude<ExtArgs> | null
    /**
     * Filter which AutoRun to delete.
     */
    where: AutoRunWhereUniqueInput
  }

  /**
   * AutoRun deleteMany
   */
  export type AutoRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutoRuns to delete
     */
    where?: AutoRunWhereInput
    /**
     * Limit how many AutoRuns to delete.
     */
    limit?: number
  }

  /**
   * AutoRun.autoRunOutbox
   */
  export type AutoRun$autoRunOutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRunOutbox
     */
    select?: AutoRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRunOutbox
     */
    omit?: AutoRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunOutboxInclude<ExtArgs> | null
    where?: AutoRunOutboxWhereInput
  }

  /**
   * AutoRun without action
   */
  export type AutoRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRun
     */
    select?: AutoRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRun
     */
    omit?: AutoRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunInclude<ExtArgs> | null
  }


  /**
   * Model AutoRunOutbox
   */

  export type AggregateAutoRunOutbox = {
    _count: AutoRunOutboxCountAggregateOutputType | null
    _min: AutoRunOutboxMinAggregateOutputType | null
    _max: AutoRunOutboxMaxAggregateOutputType | null
  }

  export type AutoRunOutboxMinAggregateOutputType = {
    id: string | null
    autoRunId: string | null
  }

  export type AutoRunOutboxMaxAggregateOutputType = {
    id: string | null
    autoRunId: string | null
  }

  export type AutoRunOutboxCountAggregateOutputType = {
    id: number
    autoRunId: number
    _all: number
  }


  export type AutoRunOutboxMinAggregateInputType = {
    id?: true
    autoRunId?: true
  }

  export type AutoRunOutboxMaxAggregateInputType = {
    id?: true
    autoRunId?: true
  }

  export type AutoRunOutboxCountAggregateInputType = {
    id?: true
    autoRunId?: true
    _all?: true
  }

  export type AutoRunOutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutoRunOutbox to aggregate.
     */
    where?: AutoRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoRunOutboxes to fetch.
     */
    orderBy?: AutoRunOutboxOrderByWithRelationInput | AutoRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutoRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoRunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AutoRunOutboxes
    **/
    _count?: true | AutoRunOutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutoRunOutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutoRunOutboxMaxAggregateInputType
  }

  export type GetAutoRunOutboxAggregateType<T extends AutoRunOutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateAutoRunOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutoRunOutbox[P]>
      : GetScalarType<T[P], AggregateAutoRunOutbox[P]>
  }




  export type AutoRunOutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutoRunOutboxWhereInput
    orderBy?: AutoRunOutboxOrderByWithAggregationInput | AutoRunOutboxOrderByWithAggregationInput[]
    by: AutoRunOutboxScalarFieldEnum[] | AutoRunOutboxScalarFieldEnum
    having?: AutoRunOutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutoRunOutboxCountAggregateInputType | true
    _min?: AutoRunOutboxMinAggregateInputType
    _max?: AutoRunOutboxMaxAggregateInputType
  }

  export type AutoRunOutboxGroupByOutputType = {
    id: string
    autoRunId: string
    _count: AutoRunOutboxCountAggregateOutputType | null
    _min: AutoRunOutboxMinAggregateOutputType | null
    _max: AutoRunOutboxMaxAggregateOutputType | null
  }

  type GetAutoRunOutboxGroupByPayload<T extends AutoRunOutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutoRunOutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutoRunOutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutoRunOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], AutoRunOutboxGroupByOutputType[P]>
        }
      >
    >


  export type AutoRunOutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autoRunId?: boolean
    autoRun?: boolean | AutoRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autoRunOutbox"]>

  export type AutoRunOutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autoRunId?: boolean
    autoRun?: boolean | AutoRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autoRunOutbox"]>

  export type AutoRunOutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autoRunId?: boolean
    autoRun?: boolean | AutoRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autoRunOutbox"]>

  export type AutoRunOutboxSelectScalar = {
    id?: boolean
    autoRunId?: boolean
  }

  export type AutoRunOutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "autoRunId", ExtArgs["result"]["autoRunOutbox"]>
  export type AutoRunOutboxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autoRun?: boolean | AutoRunDefaultArgs<ExtArgs>
  }
  export type AutoRunOutboxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autoRun?: boolean | AutoRunDefaultArgs<ExtArgs>
  }
  export type AutoRunOutboxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autoRun?: boolean | AutoRunDefaultArgs<ExtArgs>
  }

  export type $AutoRunOutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AutoRunOutbox"
    objects: {
      autoRun: Prisma.$AutoRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      autoRunId: string
    }, ExtArgs["result"]["autoRunOutbox"]>
    composites: {}
  }

  type AutoRunOutboxGetPayload<S extends boolean | null | undefined | AutoRunOutboxDefaultArgs> = $Result.GetResult<Prisma.$AutoRunOutboxPayload, S>

  type AutoRunOutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutoRunOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutoRunOutboxCountAggregateInputType | true
    }

  export interface AutoRunOutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AutoRunOutbox'], meta: { name: 'AutoRunOutbox' } }
    /**
     * Find zero or one AutoRunOutbox that matches the filter.
     * @param {AutoRunOutboxFindUniqueArgs} args - Arguments to find a AutoRunOutbox
     * @example
     * // Get one AutoRunOutbox
     * const autoRunOutbox = await prisma.autoRunOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutoRunOutboxFindUniqueArgs>(args: SelectSubset<T, AutoRunOutboxFindUniqueArgs<ExtArgs>>): Prisma__AutoRunOutboxClient<$Result.GetResult<Prisma.$AutoRunOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AutoRunOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutoRunOutboxFindUniqueOrThrowArgs} args - Arguments to find a AutoRunOutbox
     * @example
     * // Get one AutoRunOutbox
     * const autoRunOutbox = await prisma.autoRunOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutoRunOutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, AutoRunOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutoRunOutboxClient<$Result.GetResult<Prisma.$AutoRunOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AutoRunOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRunOutboxFindFirstArgs} args - Arguments to find a AutoRunOutbox
     * @example
     * // Get one AutoRunOutbox
     * const autoRunOutbox = await prisma.autoRunOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutoRunOutboxFindFirstArgs>(args?: SelectSubset<T, AutoRunOutboxFindFirstArgs<ExtArgs>>): Prisma__AutoRunOutboxClient<$Result.GetResult<Prisma.$AutoRunOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AutoRunOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRunOutboxFindFirstOrThrowArgs} args - Arguments to find a AutoRunOutbox
     * @example
     * // Get one AutoRunOutbox
     * const autoRunOutbox = await prisma.autoRunOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutoRunOutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, AutoRunOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutoRunOutboxClient<$Result.GetResult<Prisma.$AutoRunOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AutoRunOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRunOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AutoRunOutboxes
     * const autoRunOutboxes = await prisma.autoRunOutbox.findMany()
     * 
     * // Get first 10 AutoRunOutboxes
     * const autoRunOutboxes = await prisma.autoRunOutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autoRunOutboxWithIdOnly = await prisma.autoRunOutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutoRunOutboxFindManyArgs>(args?: SelectSubset<T, AutoRunOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoRunOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AutoRunOutbox.
     * @param {AutoRunOutboxCreateArgs} args - Arguments to create a AutoRunOutbox.
     * @example
     * // Create one AutoRunOutbox
     * const AutoRunOutbox = await prisma.autoRunOutbox.create({
     *   data: {
     *     // ... data to create a AutoRunOutbox
     *   }
     * })
     * 
     */
    create<T extends AutoRunOutboxCreateArgs>(args: SelectSubset<T, AutoRunOutboxCreateArgs<ExtArgs>>): Prisma__AutoRunOutboxClient<$Result.GetResult<Prisma.$AutoRunOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AutoRunOutboxes.
     * @param {AutoRunOutboxCreateManyArgs} args - Arguments to create many AutoRunOutboxes.
     * @example
     * // Create many AutoRunOutboxes
     * const autoRunOutbox = await prisma.autoRunOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutoRunOutboxCreateManyArgs>(args?: SelectSubset<T, AutoRunOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AutoRunOutboxes and returns the data saved in the database.
     * @param {AutoRunOutboxCreateManyAndReturnArgs} args - Arguments to create many AutoRunOutboxes.
     * @example
     * // Create many AutoRunOutboxes
     * const autoRunOutbox = await prisma.autoRunOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AutoRunOutboxes and only return the `id`
     * const autoRunOutboxWithIdOnly = await prisma.autoRunOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutoRunOutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, AutoRunOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoRunOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AutoRunOutbox.
     * @param {AutoRunOutboxDeleteArgs} args - Arguments to delete one AutoRunOutbox.
     * @example
     * // Delete one AutoRunOutbox
     * const AutoRunOutbox = await prisma.autoRunOutbox.delete({
     *   where: {
     *     // ... filter to delete one AutoRunOutbox
     *   }
     * })
     * 
     */
    delete<T extends AutoRunOutboxDeleteArgs>(args: SelectSubset<T, AutoRunOutboxDeleteArgs<ExtArgs>>): Prisma__AutoRunOutboxClient<$Result.GetResult<Prisma.$AutoRunOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AutoRunOutbox.
     * @param {AutoRunOutboxUpdateArgs} args - Arguments to update one AutoRunOutbox.
     * @example
     * // Update one AutoRunOutbox
     * const autoRunOutbox = await prisma.autoRunOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutoRunOutboxUpdateArgs>(args: SelectSubset<T, AutoRunOutboxUpdateArgs<ExtArgs>>): Prisma__AutoRunOutboxClient<$Result.GetResult<Prisma.$AutoRunOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AutoRunOutboxes.
     * @param {AutoRunOutboxDeleteManyArgs} args - Arguments to filter AutoRunOutboxes to delete.
     * @example
     * // Delete a few AutoRunOutboxes
     * const { count } = await prisma.autoRunOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutoRunOutboxDeleteManyArgs>(args?: SelectSubset<T, AutoRunOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutoRunOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRunOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AutoRunOutboxes
     * const autoRunOutbox = await prisma.autoRunOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutoRunOutboxUpdateManyArgs>(args: SelectSubset<T, AutoRunOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutoRunOutboxes and returns the data updated in the database.
     * @param {AutoRunOutboxUpdateManyAndReturnArgs} args - Arguments to update many AutoRunOutboxes.
     * @example
     * // Update many AutoRunOutboxes
     * const autoRunOutbox = await prisma.autoRunOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AutoRunOutboxes and only return the `id`
     * const autoRunOutboxWithIdOnly = await prisma.autoRunOutbox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AutoRunOutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, AutoRunOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoRunOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AutoRunOutbox.
     * @param {AutoRunOutboxUpsertArgs} args - Arguments to update or create a AutoRunOutbox.
     * @example
     * // Update or create a AutoRunOutbox
     * const autoRunOutbox = await prisma.autoRunOutbox.upsert({
     *   create: {
     *     // ... data to create a AutoRunOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AutoRunOutbox we want to update
     *   }
     * })
     */
    upsert<T extends AutoRunOutboxUpsertArgs>(args: SelectSubset<T, AutoRunOutboxUpsertArgs<ExtArgs>>): Prisma__AutoRunOutboxClient<$Result.GetResult<Prisma.$AutoRunOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AutoRunOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRunOutboxCountArgs} args - Arguments to filter AutoRunOutboxes to count.
     * @example
     * // Count the number of AutoRunOutboxes
     * const count = await prisma.autoRunOutbox.count({
     *   where: {
     *     // ... the filter for the AutoRunOutboxes we want to count
     *   }
     * })
    **/
    count<T extends AutoRunOutboxCountArgs>(
      args?: Subset<T, AutoRunOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutoRunOutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AutoRunOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRunOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AutoRunOutboxAggregateArgs>(args: Subset<T, AutoRunOutboxAggregateArgs>): Prisma.PrismaPromise<GetAutoRunOutboxAggregateType<T>>

    /**
     * Group by AutoRunOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRunOutboxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AutoRunOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutoRunOutboxGroupByArgs['orderBy'] }
        : { orderBy?: AutoRunOutboxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AutoRunOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutoRunOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AutoRunOutbox model
   */
  readonly fields: AutoRunOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AutoRunOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutoRunOutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autoRun<T extends AutoRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutoRunDefaultArgs<ExtArgs>>): Prisma__AutoRunClient<$Result.GetResult<Prisma.$AutoRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AutoRunOutbox model
   */
  interface AutoRunOutboxFieldRefs {
    readonly id: FieldRef<"AutoRunOutbox", 'String'>
    readonly autoRunId: FieldRef<"AutoRunOutbox", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AutoRunOutbox findUnique
   */
  export type AutoRunOutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRunOutbox
     */
    select?: AutoRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRunOutbox
     */
    omit?: AutoRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which AutoRunOutbox to fetch.
     */
    where: AutoRunOutboxWhereUniqueInput
  }

  /**
   * AutoRunOutbox findUniqueOrThrow
   */
  export type AutoRunOutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRunOutbox
     */
    select?: AutoRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRunOutbox
     */
    omit?: AutoRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which AutoRunOutbox to fetch.
     */
    where: AutoRunOutboxWhereUniqueInput
  }

  /**
   * AutoRunOutbox findFirst
   */
  export type AutoRunOutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRunOutbox
     */
    select?: AutoRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRunOutbox
     */
    omit?: AutoRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which AutoRunOutbox to fetch.
     */
    where?: AutoRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoRunOutboxes to fetch.
     */
    orderBy?: AutoRunOutboxOrderByWithRelationInput | AutoRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutoRunOutboxes.
     */
    cursor?: AutoRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoRunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutoRunOutboxes.
     */
    distinct?: AutoRunOutboxScalarFieldEnum | AutoRunOutboxScalarFieldEnum[]
  }

  /**
   * AutoRunOutbox findFirstOrThrow
   */
  export type AutoRunOutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRunOutbox
     */
    select?: AutoRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRunOutbox
     */
    omit?: AutoRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which AutoRunOutbox to fetch.
     */
    where?: AutoRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoRunOutboxes to fetch.
     */
    orderBy?: AutoRunOutboxOrderByWithRelationInput | AutoRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutoRunOutboxes.
     */
    cursor?: AutoRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoRunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutoRunOutboxes.
     */
    distinct?: AutoRunOutboxScalarFieldEnum | AutoRunOutboxScalarFieldEnum[]
  }

  /**
   * AutoRunOutbox findMany
   */
  export type AutoRunOutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRunOutbox
     */
    select?: AutoRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRunOutbox
     */
    omit?: AutoRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which AutoRunOutboxes to fetch.
     */
    where?: AutoRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoRunOutboxes to fetch.
     */
    orderBy?: AutoRunOutboxOrderByWithRelationInput | AutoRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AutoRunOutboxes.
     */
    cursor?: AutoRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoRunOutboxes.
     */
    skip?: number
    distinct?: AutoRunOutboxScalarFieldEnum | AutoRunOutboxScalarFieldEnum[]
  }

  /**
   * AutoRunOutbox create
   */
  export type AutoRunOutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRunOutbox
     */
    select?: AutoRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRunOutbox
     */
    omit?: AutoRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunOutboxInclude<ExtArgs> | null
    /**
     * The data needed to create a AutoRunOutbox.
     */
    data: XOR<AutoRunOutboxCreateInput, AutoRunOutboxUncheckedCreateInput>
  }

  /**
   * AutoRunOutbox createMany
   */
  export type AutoRunOutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AutoRunOutboxes.
     */
    data: AutoRunOutboxCreateManyInput | AutoRunOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AutoRunOutbox createManyAndReturn
   */
  export type AutoRunOutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRunOutbox
     */
    select?: AutoRunOutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRunOutbox
     */
    omit?: AutoRunOutboxOmit<ExtArgs> | null
    /**
     * The data used to create many AutoRunOutboxes.
     */
    data: AutoRunOutboxCreateManyInput | AutoRunOutboxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunOutboxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AutoRunOutbox update
   */
  export type AutoRunOutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRunOutbox
     */
    select?: AutoRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRunOutbox
     */
    omit?: AutoRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunOutboxInclude<ExtArgs> | null
    /**
     * The data needed to update a AutoRunOutbox.
     */
    data: XOR<AutoRunOutboxUpdateInput, AutoRunOutboxUncheckedUpdateInput>
    /**
     * Choose, which AutoRunOutbox to update.
     */
    where: AutoRunOutboxWhereUniqueInput
  }

  /**
   * AutoRunOutbox updateMany
   */
  export type AutoRunOutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AutoRunOutboxes.
     */
    data: XOR<AutoRunOutboxUpdateManyMutationInput, AutoRunOutboxUncheckedUpdateManyInput>
    /**
     * Filter which AutoRunOutboxes to update
     */
    where?: AutoRunOutboxWhereInput
    /**
     * Limit how many AutoRunOutboxes to update.
     */
    limit?: number
  }

  /**
   * AutoRunOutbox updateManyAndReturn
   */
  export type AutoRunOutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRunOutbox
     */
    select?: AutoRunOutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRunOutbox
     */
    omit?: AutoRunOutboxOmit<ExtArgs> | null
    /**
     * The data used to update AutoRunOutboxes.
     */
    data: XOR<AutoRunOutboxUpdateManyMutationInput, AutoRunOutboxUncheckedUpdateManyInput>
    /**
     * Filter which AutoRunOutboxes to update
     */
    where?: AutoRunOutboxWhereInput
    /**
     * Limit how many AutoRunOutboxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunOutboxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AutoRunOutbox upsert
   */
  export type AutoRunOutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRunOutbox
     */
    select?: AutoRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRunOutbox
     */
    omit?: AutoRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunOutboxInclude<ExtArgs> | null
    /**
     * The filter to search for the AutoRunOutbox to update in case it exists.
     */
    where: AutoRunOutboxWhereUniqueInput
    /**
     * In case the AutoRunOutbox found by the `where` argument doesn't exist, create a new AutoRunOutbox with this data.
     */
    create: XOR<AutoRunOutboxCreateInput, AutoRunOutboxUncheckedCreateInput>
    /**
     * In case the AutoRunOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutoRunOutboxUpdateInput, AutoRunOutboxUncheckedUpdateInput>
  }

  /**
   * AutoRunOutbox delete
   */
  export type AutoRunOutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRunOutbox
     */
    select?: AutoRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRunOutbox
     */
    omit?: AutoRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunOutboxInclude<ExtArgs> | null
    /**
     * Filter which AutoRunOutbox to delete.
     */
    where: AutoRunOutboxWhereUniqueInput
  }

  /**
   * AutoRunOutbox deleteMany
   */
  export type AutoRunOutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutoRunOutboxes to delete
     */
    where?: AutoRunOutboxWhereInput
    /**
     * Limit how many AutoRunOutboxes to delete.
     */
    limit?: number
  }

  /**
   * AutoRunOutbox without action
   */
  export type AutoRunOutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRunOutbox
     */
    select?: AutoRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRunOutbox
     */
    omit?: AutoRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoRunOutboxInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AutoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name'
  };

  export type AutoScalarFieldEnum = (typeof AutoScalarFieldEnum)[keyof typeof AutoScalarFieldEnum]


  export const TriggerScalarFieldEnum: {
    id: 'id',
    autoId: 'autoId',
    availableTriggerId: 'availableTriggerId'
  };

  export type TriggerScalarFieldEnum = (typeof TriggerScalarFieldEnum)[keyof typeof TriggerScalarFieldEnum]


  export const AvailableTriggerScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AvailableTriggerScalarFieldEnum = (typeof AvailableTriggerScalarFieldEnum)[keyof typeof AvailableTriggerScalarFieldEnum]


  export const ActionScalarFieldEnum: {
    id: 'id',
    autoId: 'autoId',
    availableActionId: 'availableActionId'
  };

  export type ActionScalarFieldEnum = (typeof ActionScalarFieldEnum)[keyof typeof ActionScalarFieldEnum]


  export const AvailableActionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AvailableActionScalarFieldEnum = (typeof AvailableActionScalarFieldEnum)[keyof typeof AvailableActionScalarFieldEnum]


  export const AutoRunScalarFieldEnum: {
    id: 'id',
    autoId: 'autoId',
    metadata: 'metadata'
  };

  export type AutoRunScalarFieldEnum = (typeof AutoRunScalarFieldEnum)[keyof typeof AutoRunScalarFieldEnum]


  export const AutoRunOutboxScalarFieldEnum: {
    id: 'id',
    autoRunId: 'autoRunId'
  };

  export type AutoRunOutboxScalarFieldEnum = (typeof AutoRunOutboxScalarFieldEnum)[keyof typeof AutoRunOutboxScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    autos?: AutoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    autos?: AutoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    autos?: AutoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type AutoWhereInput = {
    AND?: AutoWhereInput | AutoWhereInput[]
    OR?: AutoWhereInput[]
    NOT?: AutoWhereInput | AutoWhereInput[]
    id?: StringFilter<"Auto"> | string
    userId?: StringFilter<"Auto"> | string
    name?: StringFilter<"Auto"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    action?: ActionListRelationFilter
    autoRuns?: AutoRunListRelationFilter
  }

  export type AutoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    user?: UserOrderByWithRelationInput
    trigger?: TriggerOrderByWithRelationInput
    action?: ActionOrderByRelationAggregateInput
    autoRuns?: AutoRunOrderByRelationAggregateInput
  }

  export type AutoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AutoWhereInput | AutoWhereInput[]
    OR?: AutoWhereInput[]
    NOT?: AutoWhereInput | AutoWhereInput[]
    userId?: StringFilter<"Auto"> | string
    name?: StringFilter<"Auto"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    action?: ActionListRelationFilter
    autoRuns?: AutoRunListRelationFilter
  }, "id">

  export type AutoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    _count?: AutoCountOrderByAggregateInput
    _max?: AutoMaxOrderByAggregateInput
    _min?: AutoMinOrderByAggregateInput
  }

  export type AutoScalarWhereWithAggregatesInput = {
    AND?: AutoScalarWhereWithAggregatesInput | AutoScalarWhereWithAggregatesInput[]
    OR?: AutoScalarWhereWithAggregatesInput[]
    NOT?: AutoScalarWhereWithAggregatesInput | AutoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Auto"> | string
    userId?: StringWithAggregatesFilter<"Auto"> | string
    name?: StringWithAggregatesFilter<"Auto"> | string
  }

  export type TriggerWhereInput = {
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    id?: StringFilter<"Trigger"> | string
    autoId?: StringFilter<"Trigger"> | string
    availableTriggerId?: StringFilter<"Trigger"> | string
    auto?: XOR<AutoScalarRelationFilter, AutoWhereInput>
    type?: XOR<AvailableTriggerScalarRelationFilter, AvailableTriggerWhereInput>
  }

  export type TriggerOrderByWithRelationInput = {
    id?: SortOrder
    autoId?: SortOrder
    availableTriggerId?: SortOrder
    auto?: AutoOrderByWithRelationInput
    type?: AvailableTriggerOrderByWithRelationInput
  }

  export type TriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    autoId?: string
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    availableTriggerId?: StringFilter<"Trigger"> | string
    auto?: XOR<AutoScalarRelationFilter, AutoWhereInput>
    type?: XOR<AvailableTriggerScalarRelationFilter, AvailableTriggerWhereInput>
  }, "id" | "autoId">

  export type TriggerOrderByWithAggregationInput = {
    id?: SortOrder
    autoId?: SortOrder
    availableTriggerId?: SortOrder
    _count?: TriggerCountOrderByAggregateInput
    _max?: TriggerMaxOrderByAggregateInput
    _min?: TriggerMinOrderByAggregateInput
  }

  export type TriggerScalarWhereWithAggregatesInput = {
    AND?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    OR?: TriggerScalarWhereWithAggregatesInput[]
    NOT?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trigger"> | string
    autoId?: StringWithAggregatesFilter<"Trigger"> | string
    availableTriggerId?: StringWithAggregatesFilter<"Trigger"> | string
  }

  export type AvailableTriggerWhereInput = {
    AND?: AvailableTriggerWhereInput | AvailableTriggerWhereInput[]
    OR?: AvailableTriggerWhereInput[]
    NOT?: AvailableTriggerWhereInput | AvailableTriggerWhereInput[]
    id?: StringFilter<"AvailableTrigger"> | string
    name?: StringFilter<"AvailableTrigger"> | string
    triggers?: TriggerListRelationFilter
  }

  export type AvailableTriggerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    triggers?: TriggerOrderByRelationAggregateInput
  }

  export type AvailableTriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailableTriggerWhereInput | AvailableTriggerWhereInput[]
    OR?: AvailableTriggerWhereInput[]
    NOT?: AvailableTriggerWhereInput | AvailableTriggerWhereInput[]
    name?: StringFilter<"AvailableTrigger"> | string
    triggers?: TriggerListRelationFilter
  }, "id">

  export type AvailableTriggerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AvailableTriggerCountOrderByAggregateInput
    _max?: AvailableTriggerMaxOrderByAggregateInput
    _min?: AvailableTriggerMinOrderByAggregateInput
  }

  export type AvailableTriggerScalarWhereWithAggregatesInput = {
    AND?: AvailableTriggerScalarWhereWithAggregatesInput | AvailableTriggerScalarWhereWithAggregatesInput[]
    OR?: AvailableTriggerScalarWhereWithAggregatesInput[]
    NOT?: AvailableTriggerScalarWhereWithAggregatesInput | AvailableTriggerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailableTrigger"> | string
    name?: StringWithAggregatesFilter<"AvailableTrigger"> | string
  }

  export type ActionWhereInput = {
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    id?: StringFilter<"Action"> | string
    autoId?: StringFilter<"Action"> | string
    availableActionId?: StringFilter<"Action"> | string
    auto?: XOR<AutoScalarRelationFilter, AutoWhereInput>
    type?: XOR<AvailableActionScalarRelationFilter, AvailableActionWhereInput>
  }

  export type ActionOrderByWithRelationInput = {
    id?: SortOrder
    autoId?: SortOrder
    availableActionId?: SortOrder
    auto?: AutoOrderByWithRelationInput
    type?: AvailableActionOrderByWithRelationInput
  }

  export type ActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    autoId?: string
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    availableActionId?: StringFilter<"Action"> | string
    auto?: XOR<AutoScalarRelationFilter, AutoWhereInput>
    type?: XOR<AvailableActionScalarRelationFilter, AvailableActionWhereInput>
  }, "id" | "autoId">

  export type ActionOrderByWithAggregationInput = {
    id?: SortOrder
    autoId?: SortOrder
    availableActionId?: SortOrder
    _count?: ActionCountOrderByAggregateInput
    _max?: ActionMaxOrderByAggregateInput
    _min?: ActionMinOrderByAggregateInput
  }

  export type ActionScalarWhereWithAggregatesInput = {
    AND?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    OR?: ActionScalarWhereWithAggregatesInput[]
    NOT?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Action"> | string
    autoId?: StringWithAggregatesFilter<"Action"> | string
    availableActionId?: StringWithAggregatesFilter<"Action"> | string
  }

  export type AvailableActionWhereInput = {
    AND?: AvailableActionWhereInput | AvailableActionWhereInput[]
    OR?: AvailableActionWhereInput[]
    NOT?: AvailableActionWhereInput | AvailableActionWhereInput[]
    id?: StringFilter<"AvailableAction"> | string
    name?: StringFilter<"AvailableAction"> | string
    actions?: ActionListRelationFilter
  }

  export type AvailableActionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    actions?: ActionOrderByRelationAggregateInput
  }

  export type AvailableActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailableActionWhereInput | AvailableActionWhereInput[]
    OR?: AvailableActionWhereInput[]
    NOT?: AvailableActionWhereInput | AvailableActionWhereInput[]
    name?: StringFilter<"AvailableAction"> | string
    actions?: ActionListRelationFilter
  }, "id">

  export type AvailableActionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AvailableActionCountOrderByAggregateInput
    _max?: AvailableActionMaxOrderByAggregateInput
    _min?: AvailableActionMinOrderByAggregateInput
  }

  export type AvailableActionScalarWhereWithAggregatesInput = {
    AND?: AvailableActionScalarWhereWithAggregatesInput | AvailableActionScalarWhereWithAggregatesInput[]
    OR?: AvailableActionScalarWhereWithAggregatesInput[]
    NOT?: AvailableActionScalarWhereWithAggregatesInput | AvailableActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailableAction"> | string
    name?: StringWithAggregatesFilter<"AvailableAction"> | string
  }

  export type AutoRunWhereInput = {
    AND?: AutoRunWhereInput | AutoRunWhereInput[]
    OR?: AutoRunWhereInput[]
    NOT?: AutoRunWhereInput | AutoRunWhereInput[]
    id?: StringFilter<"AutoRun"> | string
    autoId?: StringFilter<"AutoRun"> | string
    metadata?: JsonNullableFilter<"AutoRun">
    auto?: XOR<AutoScalarRelationFilter, AutoWhereInput>
    autoRunOutbox?: XOR<AutoRunOutboxNullableScalarRelationFilter, AutoRunOutboxWhereInput> | null
  }

  export type AutoRunOrderByWithRelationInput = {
    id?: SortOrder
    autoId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    auto?: AutoOrderByWithRelationInput
    autoRunOutbox?: AutoRunOutboxOrderByWithRelationInput
  }

  export type AutoRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AutoRunWhereInput | AutoRunWhereInput[]
    OR?: AutoRunWhereInput[]
    NOT?: AutoRunWhereInput | AutoRunWhereInput[]
    autoId?: StringFilter<"AutoRun"> | string
    metadata?: JsonNullableFilter<"AutoRun">
    auto?: XOR<AutoScalarRelationFilter, AutoWhereInput>
    autoRunOutbox?: XOR<AutoRunOutboxNullableScalarRelationFilter, AutoRunOutboxWhereInput> | null
  }, "id">

  export type AutoRunOrderByWithAggregationInput = {
    id?: SortOrder
    autoId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: AutoRunCountOrderByAggregateInput
    _max?: AutoRunMaxOrderByAggregateInput
    _min?: AutoRunMinOrderByAggregateInput
  }

  export type AutoRunScalarWhereWithAggregatesInput = {
    AND?: AutoRunScalarWhereWithAggregatesInput | AutoRunScalarWhereWithAggregatesInput[]
    OR?: AutoRunScalarWhereWithAggregatesInput[]
    NOT?: AutoRunScalarWhereWithAggregatesInput | AutoRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AutoRun"> | string
    autoId?: StringWithAggregatesFilter<"AutoRun"> | string
    metadata?: JsonNullableWithAggregatesFilter<"AutoRun">
  }

  export type AutoRunOutboxWhereInput = {
    AND?: AutoRunOutboxWhereInput | AutoRunOutboxWhereInput[]
    OR?: AutoRunOutboxWhereInput[]
    NOT?: AutoRunOutboxWhereInput | AutoRunOutboxWhereInput[]
    id?: StringFilter<"AutoRunOutbox"> | string
    autoRunId?: StringFilter<"AutoRunOutbox"> | string
    autoRun?: XOR<AutoRunScalarRelationFilter, AutoRunWhereInput>
  }

  export type AutoRunOutboxOrderByWithRelationInput = {
    id?: SortOrder
    autoRunId?: SortOrder
    autoRun?: AutoRunOrderByWithRelationInput
  }

  export type AutoRunOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    autoRunId?: string
    AND?: AutoRunOutboxWhereInput | AutoRunOutboxWhereInput[]
    OR?: AutoRunOutboxWhereInput[]
    NOT?: AutoRunOutboxWhereInput | AutoRunOutboxWhereInput[]
    autoRun?: XOR<AutoRunScalarRelationFilter, AutoRunWhereInput>
  }, "id" | "autoRunId">

  export type AutoRunOutboxOrderByWithAggregationInput = {
    id?: SortOrder
    autoRunId?: SortOrder
    _count?: AutoRunOutboxCountOrderByAggregateInput
    _max?: AutoRunOutboxMaxOrderByAggregateInput
    _min?: AutoRunOutboxMinOrderByAggregateInput
  }

  export type AutoRunOutboxScalarWhereWithAggregatesInput = {
    AND?: AutoRunOutboxScalarWhereWithAggregatesInput | AutoRunOutboxScalarWhereWithAggregatesInput[]
    OR?: AutoRunOutboxScalarWhereWithAggregatesInput[]
    NOT?: AutoRunOutboxScalarWhereWithAggregatesInput | AutoRunOutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AutoRunOutbox"> | string
    autoRunId?: StringWithAggregatesFilter<"AutoRunOutbox"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    autos?: AutoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    autos?: AutoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    autos?: AutoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    autos?: AutoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AutoCreateInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutAutosInput
    trigger?: TriggerCreateNestedOneWithoutAutoInput
    action?: ActionCreateNestedManyWithoutAutoInput
    autoRuns?: AutoRunCreateNestedManyWithoutAutoInput
  }

  export type AutoUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutAutoInput
    action?: ActionUncheckedCreateNestedManyWithoutAutoInput
    autoRuns?: AutoRunUncheckedCreateNestedManyWithoutAutoInput
  }

  export type AutoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAutosNestedInput
    trigger?: TriggerUpdateOneWithoutAutoNestedInput
    action?: ActionUpdateManyWithoutAutoNestedInput
    autoRuns?: AutoRunUpdateManyWithoutAutoNestedInput
  }

  export type AutoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutAutoNestedInput
    action?: ActionUncheckedUpdateManyWithoutAutoNestedInput
    autoRuns?: AutoRunUncheckedUpdateManyWithoutAutoNestedInput
  }

  export type AutoCreateManyInput = {
    id?: string
    userId: string
    name: string
  }

  export type AutoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AutoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateInput = {
    id?: string
    auto: AutoCreateNestedOneWithoutTriggerInput
    type: AvailableTriggerCreateNestedOneWithoutTriggersInput
  }

  export type TriggerUncheckedCreateInput = {
    id?: string
    autoId: string
    availableTriggerId: string
  }

  export type TriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auto?: AutoUpdateOneRequiredWithoutTriggerNestedInput
    type?: AvailableTriggerUpdateOneRequiredWithoutTriggersNestedInput
  }

  export type TriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    autoId?: StringFieldUpdateOperationsInput | string
    availableTriggerId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateManyInput = {
    id?: string
    autoId: string
    availableTriggerId: string
  }

  export type TriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    autoId?: StringFieldUpdateOperationsInput | string
    availableTriggerId?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggerCreateInput = {
    id?: string
    name: string
    triggers?: TriggerCreateNestedManyWithoutTypeInput
  }

  export type AvailableTriggerUncheckedCreateInput = {
    id?: string
    name: string
    triggers?: TriggerUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AvailableTriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    triggers?: TriggerUpdateManyWithoutTypeNestedInput
  }

  export type AvailableTriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    triggers?: TriggerUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AvailableTriggerCreateManyInput = {
    id?: string
    name: string
  }

  export type AvailableTriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateInput = {
    id?: string
    auto: AutoCreateNestedOneWithoutActionInput
    type: AvailableActionCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateInput = {
    id?: string
    autoId: string
    availableActionId: string
  }

  export type ActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auto?: AutoUpdateOneRequiredWithoutActionNestedInput
    type?: AvailableActionUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    autoId?: StringFieldUpdateOperationsInput | string
    availableActionId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateManyInput = {
    id?: string
    autoId: string
    availableActionId: string
  }

  export type ActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    autoId?: StringFieldUpdateOperationsInput | string
    availableActionId?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionCreateInput = {
    id?: string
    name: string
    actions?: ActionCreateNestedManyWithoutTypeInput
  }

  export type AvailableActionUncheckedCreateInput = {
    id?: string
    name: string
    actions?: ActionUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AvailableActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    actions?: ActionUpdateManyWithoutTypeNestedInput
  }

  export type AvailableActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    actions?: ActionUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AvailableActionCreateManyInput = {
    id?: string
    name: string
  }

  export type AvailableActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AutoRunCreateInput = {
    id?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    auto: AutoCreateNestedOneWithoutAutoRunsInput
    autoRunOutbox?: AutoRunOutboxCreateNestedOneWithoutAutoRunInput
  }

  export type AutoRunUncheckedCreateInput = {
    id?: string
    autoId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    autoRunOutbox?: AutoRunOutboxUncheckedCreateNestedOneWithoutAutoRunInput
  }

  export type AutoRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    auto?: AutoUpdateOneRequiredWithoutAutoRunsNestedInput
    autoRunOutbox?: AutoRunOutboxUpdateOneWithoutAutoRunNestedInput
  }

  export type AutoRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    autoId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    autoRunOutbox?: AutoRunOutboxUncheckedUpdateOneWithoutAutoRunNestedInput
  }

  export type AutoRunCreateManyInput = {
    id?: string
    autoId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AutoRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AutoRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    autoId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AutoRunOutboxCreateInput = {
    id?: string
    autoRun: AutoRunCreateNestedOneWithoutAutoRunOutboxInput
  }

  export type AutoRunOutboxUncheckedCreateInput = {
    id?: string
    autoRunId: string
  }

  export type AutoRunOutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    autoRun?: AutoRunUpdateOneRequiredWithoutAutoRunOutboxNestedInput
  }

  export type AutoRunOutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    autoRunId?: StringFieldUpdateOperationsInput | string
  }

  export type AutoRunOutboxCreateManyInput = {
    id?: string
    autoRunId: string
  }

  export type AutoRunOutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AutoRunOutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    autoRunId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AutoListRelationFilter = {
    every?: AutoWhereInput
    some?: AutoWhereInput
    none?: AutoWhereInput
  }

  export type AutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TriggerNullableScalarRelationFilter = {
    is?: TriggerWhereInput | null
    isNot?: TriggerWhereInput | null
  }

  export type ActionListRelationFilter = {
    every?: ActionWhereInput
    some?: ActionWhereInput
    none?: ActionWhereInput
  }

  export type AutoRunListRelationFilter = {
    every?: AutoRunWhereInput
    some?: AutoRunWhereInput
    none?: AutoRunWhereInput
  }

  export type ActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutoRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type AutoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type AutoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type AutoScalarRelationFilter = {
    is?: AutoWhereInput
    isNot?: AutoWhereInput
  }

  export type AvailableTriggerScalarRelationFilter = {
    is?: AvailableTriggerWhereInput
    isNot?: AvailableTriggerWhereInput
  }

  export type TriggerCountOrderByAggregateInput = {
    id?: SortOrder
    autoId?: SortOrder
    availableTriggerId?: SortOrder
  }

  export type TriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    autoId?: SortOrder
    availableTriggerId?: SortOrder
  }

  export type TriggerMinOrderByAggregateInput = {
    id?: SortOrder
    autoId?: SortOrder
    availableTriggerId?: SortOrder
  }

  export type TriggerListRelationFilter = {
    every?: TriggerWhereInput
    some?: TriggerWhereInput
    none?: TriggerWhereInput
  }

  export type TriggerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailableTriggerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableTriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableTriggerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionScalarRelationFilter = {
    is?: AvailableActionWhereInput
    isNot?: AvailableActionWhereInput
  }

  export type ActionCountOrderByAggregateInput = {
    id?: SortOrder
    autoId?: SortOrder
    availableActionId?: SortOrder
  }

  export type ActionMaxOrderByAggregateInput = {
    id?: SortOrder
    autoId?: SortOrder
    availableActionId?: SortOrder
  }

  export type ActionMinOrderByAggregateInput = {
    id?: SortOrder
    autoId?: SortOrder
    availableActionId?: SortOrder
  }

  export type AvailableActionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AutoRunOutboxNullableScalarRelationFilter = {
    is?: AutoRunOutboxWhereInput | null
    isNot?: AutoRunOutboxWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AutoRunCountOrderByAggregateInput = {
    id?: SortOrder
    autoId?: SortOrder
    metadata?: SortOrder
  }

  export type AutoRunMaxOrderByAggregateInput = {
    id?: SortOrder
    autoId?: SortOrder
  }

  export type AutoRunMinOrderByAggregateInput = {
    id?: SortOrder
    autoId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type AutoRunScalarRelationFilter = {
    is?: AutoRunWhereInput
    isNot?: AutoRunWhereInput
  }

  export type AutoRunOutboxCountOrderByAggregateInput = {
    id?: SortOrder
    autoRunId?: SortOrder
  }

  export type AutoRunOutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    autoRunId?: SortOrder
  }

  export type AutoRunOutboxMinOrderByAggregateInput = {
    id?: SortOrder
    autoRunId?: SortOrder
  }

  export type AutoCreateNestedManyWithoutUserInput = {
    create?: XOR<AutoCreateWithoutUserInput, AutoUncheckedCreateWithoutUserInput> | AutoCreateWithoutUserInput[] | AutoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutoCreateOrConnectWithoutUserInput | AutoCreateOrConnectWithoutUserInput[]
    createMany?: AutoCreateManyUserInputEnvelope
    connect?: AutoWhereUniqueInput | AutoWhereUniqueInput[]
  }

  export type AutoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AutoCreateWithoutUserInput, AutoUncheckedCreateWithoutUserInput> | AutoCreateWithoutUserInput[] | AutoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutoCreateOrConnectWithoutUserInput | AutoCreateOrConnectWithoutUserInput[]
    createMany?: AutoCreateManyUserInputEnvelope
    connect?: AutoWhereUniqueInput | AutoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AutoUpdateManyWithoutUserNestedInput = {
    create?: XOR<AutoCreateWithoutUserInput, AutoUncheckedCreateWithoutUserInput> | AutoCreateWithoutUserInput[] | AutoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutoCreateOrConnectWithoutUserInput | AutoCreateOrConnectWithoutUserInput[]
    upsert?: AutoUpsertWithWhereUniqueWithoutUserInput | AutoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AutoCreateManyUserInputEnvelope
    set?: AutoWhereUniqueInput | AutoWhereUniqueInput[]
    disconnect?: AutoWhereUniqueInput | AutoWhereUniqueInput[]
    delete?: AutoWhereUniqueInput | AutoWhereUniqueInput[]
    connect?: AutoWhereUniqueInput | AutoWhereUniqueInput[]
    update?: AutoUpdateWithWhereUniqueWithoutUserInput | AutoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AutoUpdateManyWithWhereWithoutUserInput | AutoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AutoScalarWhereInput | AutoScalarWhereInput[]
  }

  export type AutoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AutoCreateWithoutUserInput, AutoUncheckedCreateWithoutUserInput> | AutoCreateWithoutUserInput[] | AutoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutoCreateOrConnectWithoutUserInput | AutoCreateOrConnectWithoutUserInput[]
    upsert?: AutoUpsertWithWhereUniqueWithoutUserInput | AutoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AutoCreateManyUserInputEnvelope
    set?: AutoWhereUniqueInput | AutoWhereUniqueInput[]
    disconnect?: AutoWhereUniqueInput | AutoWhereUniqueInput[]
    delete?: AutoWhereUniqueInput | AutoWhereUniqueInput[]
    connect?: AutoWhereUniqueInput | AutoWhereUniqueInput[]
    update?: AutoUpdateWithWhereUniqueWithoutUserInput | AutoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AutoUpdateManyWithWhereWithoutUserInput | AutoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AutoScalarWhereInput | AutoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAutosInput = {
    create?: XOR<UserCreateWithoutAutosInput, UserUncheckedCreateWithoutAutosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAutosInput
    connect?: UserWhereUniqueInput
  }

  export type TriggerCreateNestedOneWithoutAutoInput = {
    create?: XOR<TriggerCreateWithoutAutoInput, TriggerUncheckedCreateWithoutAutoInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutAutoInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionCreateNestedManyWithoutAutoInput = {
    create?: XOR<ActionCreateWithoutAutoInput, ActionUncheckedCreateWithoutAutoInput> | ActionCreateWithoutAutoInput[] | ActionUncheckedCreateWithoutAutoInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutAutoInput | ActionCreateOrConnectWithoutAutoInput[]
    createMany?: ActionCreateManyAutoInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type AutoRunCreateNestedManyWithoutAutoInput = {
    create?: XOR<AutoRunCreateWithoutAutoInput, AutoRunUncheckedCreateWithoutAutoInput> | AutoRunCreateWithoutAutoInput[] | AutoRunUncheckedCreateWithoutAutoInput[]
    connectOrCreate?: AutoRunCreateOrConnectWithoutAutoInput | AutoRunCreateOrConnectWithoutAutoInput[]
    createMany?: AutoRunCreateManyAutoInputEnvelope
    connect?: AutoRunWhereUniqueInput | AutoRunWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedOneWithoutAutoInput = {
    create?: XOR<TriggerCreateWithoutAutoInput, TriggerUncheckedCreateWithoutAutoInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutAutoInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionUncheckedCreateNestedManyWithoutAutoInput = {
    create?: XOR<ActionCreateWithoutAutoInput, ActionUncheckedCreateWithoutAutoInput> | ActionCreateWithoutAutoInput[] | ActionUncheckedCreateWithoutAutoInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutAutoInput | ActionCreateOrConnectWithoutAutoInput[]
    createMany?: ActionCreateManyAutoInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type AutoRunUncheckedCreateNestedManyWithoutAutoInput = {
    create?: XOR<AutoRunCreateWithoutAutoInput, AutoRunUncheckedCreateWithoutAutoInput> | AutoRunCreateWithoutAutoInput[] | AutoRunUncheckedCreateWithoutAutoInput[]
    connectOrCreate?: AutoRunCreateOrConnectWithoutAutoInput | AutoRunCreateOrConnectWithoutAutoInput[]
    createMany?: AutoRunCreateManyAutoInputEnvelope
    connect?: AutoRunWhereUniqueInput | AutoRunWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAutosNestedInput = {
    create?: XOR<UserCreateWithoutAutosInput, UserUncheckedCreateWithoutAutosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAutosInput
    upsert?: UserUpsertWithoutAutosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAutosInput, UserUpdateWithoutAutosInput>, UserUncheckedUpdateWithoutAutosInput>
  }

  export type TriggerUpdateOneWithoutAutoNestedInput = {
    create?: XOR<TriggerCreateWithoutAutoInput, TriggerUncheckedCreateWithoutAutoInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutAutoInput
    upsert?: TriggerUpsertWithoutAutoInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutAutoInput, TriggerUpdateWithoutAutoInput>, TriggerUncheckedUpdateWithoutAutoInput>
  }

  export type ActionUpdateManyWithoutAutoNestedInput = {
    create?: XOR<ActionCreateWithoutAutoInput, ActionUncheckedCreateWithoutAutoInput> | ActionCreateWithoutAutoInput[] | ActionUncheckedCreateWithoutAutoInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutAutoInput | ActionCreateOrConnectWithoutAutoInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutAutoInput | ActionUpsertWithWhereUniqueWithoutAutoInput[]
    createMany?: ActionCreateManyAutoInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutAutoInput | ActionUpdateWithWhereUniqueWithoutAutoInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutAutoInput | ActionUpdateManyWithWhereWithoutAutoInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type AutoRunUpdateManyWithoutAutoNestedInput = {
    create?: XOR<AutoRunCreateWithoutAutoInput, AutoRunUncheckedCreateWithoutAutoInput> | AutoRunCreateWithoutAutoInput[] | AutoRunUncheckedCreateWithoutAutoInput[]
    connectOrCreate?: AutoRunCreateOrConnectWithoutAutoInput | AutoRunCreateOrConnectWithoutAutoInput[]
    upsert?: AutoRunUpsertWithWhereUniqueWithoutAutoInput | AutoRunUpsertWithWhereUniqueWithoutAutoInput[]
    createMany?: AutoRunCreateManyAutoInputEnvelope
    set?: AutoRunWhereUniqueInput | AutoRunWhereUniqueInput[]
    disconnect?: AutoRunWhereUniqueInput | AutoRunWhereUniqueInput[]
    delete?: AutoRunWhereUniqueInput | AutoRunWhereUniqueInput[]
    connect?: AutoRunWhereUniqueInput | AutoRunWhereUniqueInput[]
    update?: AutoRunUpdateWithWhereUniqueWithoutAutoInput | AutoRunUpdateWithWhereUniqueWithoutAutoInput[]
    updateMany?: AutoRunUpdateManyWithWhereWithoutAutoInput | AutoRunUpdateManyWithWhereWithoutAutoInput[]
    deleteMany?: AutoRunScalarWhereInput | AutoRunScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateOneWithoutAutoNestedInput = {
    create?: XOR<TriggerCreateWithoutAutoInput, TriggerUncheckedCreateWithoutAutoInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutAutoInput
    upsert?: TriggerUpsertWithoutAutoInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutAutoInput, TriggerUpdateWithoutAutoInput>, TriggerUncheckedUpdateWithoutAutoInput>
  }

  export type ActionUncheckedUpdateManyWithoutAutoNestedInput = {
    create?: XOR<ActionCreateWithoutAutoInput, ActionUncheckedCreateWithoutAutoInput> | ActionCreateWithoutAutoInput[] | ActionUncheckedCreateWithoutAutoInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutAutoInput | ActionCreateOrConnectWithoutAutoInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutAutoInput | ActionUpsertWithWhereUniqueWithoutAutoInput[]
    createMany?: ActionCreateManyAutoInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutAutoInput | ActionUpdateWithWhereUniqueWithoutAutoInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutAutoInput | ActionUpdateManyWithWhereWithoutAutoInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type AutoRunUncheckedUpdateManyWithoutAutoNestedInput = {
    create?: XOR<AutoRunCreateWithoutAutoInput, AutoRunUncheckedCreateWithoutAutoInput> | AutoRunCreateWithoutAutoInput[] | AutoRunUncheckedCreateWithoutAutoInput[]
    connectOrCreate?: AutoRunCreateOrConnectWithoutAutoInput | AutoRunCreateOrConnectWithoutAutoInput[]
    upsert?: AutoRunUpsertWithWhereUniqueWithoutAutoInput | AutoRunUpsertWithWhereUniqueWithoutAutoInput[]
    createMany?: AutoRunCreateManyAutoInputEnvelope
    set?: AutoRunWhereUniqueInput | AutoRunWhereUniqueInput[]
    disconnect?: AutoRunWhereUniqueInput | AutoRunWhereUniqueInput[]
    delete?: AutoRunWhereUniqueInput | AutoRunWhereUniqueInput[]
    connect?: AutoRunWhereUniqueInput | AutoRunWhereUniqueInput[]
    update?: AutoRunUpdateWithWhereUniqueWithoutAutoInput | AutoRunUpdateWithWhereUniqueWithoutAutoInput[]
    updateMany?: AutoRunUpdateManyWithWhereWithoutAutoInput | AutoRunUpdateManyWithWhereWithoutAutoInput[]
    deleteMany?: AutoRunScalarWhereInput | AutoRunScalarWhereInput[]
  }

  export type AutoCreateNestedOneWithoutTriggerInput = {
    create?: XOR<AutoCreateWithoutTriggerInput, AutoUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AutoCreateOrConnectWithoutTriggerInput
    connect?: AutoWhereUniqueInput
  }

  export type AvailableTriggerCreateNestedOneWithoutTriggersInput = {
    create?: XOR<AvailableTriggerCreateWithoutTriggersInput, AvailableTriggerUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: AvailableTriggerCreateOrConnectWithoutTriggersInput
    connect?: AvailableTriggerWhereUniqueInput
  }

  export type AutoUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: XOR<AutoCreateWithoutTriggerInput, AutoUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AutoCreateOrConnectWithoutTriggerInput
    upsert?: AutoUpsertWithoutTriggerInput
    connect?: AutoWhereUniqueInput
    update?: XOR<XOR<AutoUpdateToOneWithWhereWithoutTriggerInput, AutoUpdateWithoutTriggerInput>, AutoUncheckedUpdateWithoutTriggerInput>
  }

  export type AvailableTriggerUpdateOneRequiredWithoutTriggersNestedInput = {
    create?: XOR<AvailableTriggerCreateWithoutTriggersInput, AvailableTriggerUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: AvailableTriggerCreateOrConnectWithoutTriggersInput
    upsert?: AvailableTriggerUpsertWithoutTriggersInput
    connect?: AvailableTriggerWhereUniqueInput
    update?: XOR<XOR<AvailableTriggerUpdateToOneWithWhereWithoutTriggersInput, AvailableTriggerUpdateWithoutTriggersInput>, AvailableTriggerUncheckedUpdateWithoutTriggersInput>
  }

  export type TriggerCreateNestedManyWithoutTypeInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type TriggerUpdateManyWithoutTypeNestedInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutTypeInput | TriggerUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutTypeInput | TriggerUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutTypeInput | TriggerUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutTypeInput | TriggerUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutTypeInput | TriggerUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutTypeInput | TriggerUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type AutoCreateNestedOneWithoutActionInput = {
    create?: XOR<AutoCreateWithoutActionInput, AutoUncheckedCreateWithoutActionInput>
    connectOrCreate?: AutoCreateOrConnectWithoutActionInput
    connect?: AutoWhereUniqueInput
  }

  export type AvailableActionCreateNestedOneWithoutActionsInput = {
    create?: XOR<AvailableActionCreateWithoutActionsInput, AvailableActionUncheckedCreateWithoutActionsInput>
    connectOrCreate?: AvailableActionCreateOrConnectWithoutActionsInput
    connect?: AvailableActionWhereUniqueInput
  }

  export type AutoUpdateOneRequiredWithoutActionNestedInput = {
    create?: XOR<AutoCreateWithoutActionInput, AutoUncheckedCreateWithoutActionInput>
    connectOrCreate?: AutoCreateOrConnectWithoutActionInput
    upsert?: AutoUpsertWithoutActionInput
    connect?: AutoWhereUniqueInput
    update?: XOR<XOR<AutoUpdateToOneWithWhereWithoutActionInput, AutoUpdateWithoutActionInput>, AutoUncheckedUpdateWithoutActionInput>
  }

  export type AvailableActionUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<AvailableActionCreateWithoutActionsInput, AvailableActionUncheckedCreateWithoutActionsInput>
    connectOrCreate?: AvailableActionCreateOrConnectWithoutActionsInput
    upsert?: AvailableActionUpsertWithoutActionsInput
    connect?: AvailableActionWhereUniqueInput
    update?: XOR<XOR<AvailableActionUpdateToOneWithWhereWithoutActionsInput, AvailableActionUpdateWithoutActionsInput>, AvailableActionUncheckedUpdateWithoutActionsInput>
  }

  export type ActionCreateNestedManyWithoutTypeInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ActionUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ActionUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutTypeInput | ActionUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutTypeInput | ActionUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutTypeInput | ActionUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ActionUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutTypeInput | ActionUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutTypeInput | ActionUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutTypeInput | ActionUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type AutoCreateNestedOneWithoutAutoRunsInput = {
    create?: XOR<AutoCreateWithoutAutoRunsInput, AutoUncheckedCreateWithoutAutoRunsInput>
    connectOrCreate?: AutoCreateOrConnectWithoutAutoRunsInput
    connect?: AutoWhereUniqueInput
  }

  export type AutoRunOutboxCreateNestedOneWithoutAutoRunInput = {
    create?: XOR<AutoRunOutboxCreateWithoutAutoRunInput, AutoRunOutboxUncheckedCreateWithoutAutoRunInput>
    connectOrCreate?: AutoRunOutboxCreateOrConnectWithoutAutoRunInput
    connect?: AutoRunOutboxWhereUniqueInput
  }

  export type AutoRunOutboxUncheckedCreateNestedOneWithoutAutoRunInput = {
    create?: XOR<AutoRunOutboxCreateWithoutAutoRunInput, AutoRunOutboxUncheckedCreateWithoutAutoRunInput>
    connectOrCreate?: AutoRunOutboxCreateOrConnectWithoutAutoRunInput
    connect?: AutoRunOutboxWhereUniqueInput
  }

  export type AutoUpdateOneRequiredWithoutAutoRunsNestedInput = {
    create?: XOR<AutoCreateWithoutAutoRunsInput, AutoUncheckedCreateWithoutAutoRunsInput>
    connectOrCreate?: AutoCreateOrConnectWithoutAutoRunsInput
    upsert?: AutoUpsertWithoutAutoRunsInput
    connect?: AutoWhereUniqueInput
    update?: XOR<XOR<AutoUpdateToOneWithWhereWithoutAutoRunsInput, AutoUpdateWithoutAutoRunsInput>, AutoUncheckedUpdateWithoutAutoRunsInput>
  }

  export type AutoRunOutboxUpdateOneWithoutAutoRunNestedInput = {
    create?: XOR<AutoRunOutboxCreateWithoutAutoRunInput, AutoRunOutboxUncheckedCreateWithoutAutoRunInput>
    connectOrCreate?: AutoRunOutboxCreateOrConnectWithoutAutoRunInput
    upsert?: AutoRunOutboxUpsertWithoutAutoRunInput
    disconnect?: AutoRunOutboxWhereInput | boolean
    delete?: AutoRunOutboxWhereInput | boolean
    connect?: AutoRunOutboxWhereUniqueInput
    update?: XOR<XOR<AutoRunOutboxUpdateToOneWithWhereWithoutAutoRunInput, AutoRunOutboxUpdateWithoutAutoRunInput>, AutoRunOutboxUncheckedUpdateWithoutAutoRunInput>
  }

  export type AutoRunOutboxUncheckedUpdateOneWithoutAutoRunNestedInput = {
    create?: XOR<AutoRunOutboxCreateWithoutAutoRunInput, AutoRunOutboxUncheckedCreateWithoutAutoRunInput>
    connectOrCreate?: AutoRunOutboxCreateOrConnectWithoutAutoRunInput
    upsert?: AutoRunOutboxUpsertWithoutAutoRunInput
    disconnect?: AutoRunOutboxWhereInput | boolean
    delete?: AutoRunOutboxWhereInput | boolean
    connect?: AutoRunOutboxWhereUniqueInput
    update?: XOR<XOR<AutoRunOutboxUpdateToOneWithWhereWithoutAutoRunInput, AutoRunOutboxUpdateWithoutAutoRunInput>, AutoRunOutboxUncheckedUpdateWithoutAutoRunInput>
  }

  export type AutoRunCreateNestedOneWithoutAutoRunOutboxInput = {
    create?: XOR<AutoRunCreateWithoutAutoRunOutboxInput, AutoRunUncheckedCreateWithoutAutoRunOutboxInput>
    connectOrCreate?: AutoRunCreateOrConnectWithoutAutoRunOutboxInput
    connect?: AutoRunWhereUniqueInput
  }

  export type AutoRunUpdateOneRequiredWithoutAutoRunOutboxNestedInput = {
    create?: XOR<AutoRunCreateWithoutAutoRunOutboxInput, AutoRunUncheckedCreateWithoutAutoRunOutboxInput>
    connectOrCreate?: AutoRunCreateOrConnectWithoutAutoRunOutboxInput
    upsert?: AutoRunUpsertWithoutAutoRunOutboxInput
    connect?: AutoRunWhereUniqueInput
    update?: XOR<XOR<AutoRunUpdateToOneWithWhereWithoutAutoRunOutboxInput, AutoRunUpdateWithoutAutoRunOutboxInput>, AutoRunUncheckedUpdateWithoutAutoRunOutboxInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AutoCreateWithoutUserInput = {
    id?: string
    name: string
    trigger?: TriggerCreateNestedOneWithoutAutoInput
    action?: ActionCreateNestedManyWithoutAutoInput
    autoRuns?: AutoRunCreateNestedManyWithoutAutoInput
  }

  export type AutoUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutAutoInput
    action?: ActionUncheckedCreateNestedManyWithoutAutoInput
    autoRuns?: AutoRunUncheckedCreateNestedManyWithoutAutoInput
  }

  export type AutoCreateOrConnectWithoutUserInput = {
    where: AutoWhereUniqueInput
    create: XOR<AutoCreateWithoutUserInput, AutoUncheckedCreateWithoutUserInput>
  }

  export type AutoCreateManyUserInputEnvelope = {
    data: AutoCreateManyUserInput | AutoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AutoUpsertWithWhereUniqueWithoutUserInput = {
    where: AutoWhereUniqueInput
    update: XOR<AutoUpdateWithoutUserInput, AutoUncheckedUpdateWithoutUserInput>
    create: XOR<AutoCreateWithoutUserInput, AutoUncheckedCreateWithoutUserInput>
  }

  export type AutoUpdateWithWhereUniqueWithoutUserInput = {
    where: AutoWhereUniqueInput
    data: XOR<AutoUpdateWithoutUserInput, AutoUncheckedUpdateWithoutUserInput>
  }

  export type AutoUpdateManyWithWhereWithoutUserInput = {
    where: AutoScalarWhereInput
    data: XOR<AutoUpdateManyMutationInput, AutoUncheckedUpdateManyWithoutUserInput>
  }

  export type AutoScalarWhereInput = {
    AND?: AutoScalarWhereInput | AutoScalarWhereInput[]
    OR?: AutoScalarWhereInput[]
    NOT?: AutoScalarWhereInput | AutoScalarWhereInput[]
    id?: StringFilter<"Auto"> | string
    userId?: StringFilter<"Auto"> | string
    name?: StringFilter<"Auto"> | string
  }

  export type UserCreateWithoutAutosInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUncheckedCreateWithoutAutosInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserCreateOrConnectWithoutAutosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAutosInput, UserUncheckedCreateWithoutAutosInput>
  }

  export type TriggerCreateWithoutAutoInput = {
    id?: string
    type: AvailableTriggerCreateNestedOneWithoutTriggersInput
  }

  export type TriggerUncheckedCreateWithoutAutoInput = {
    id?: string
    availableTriggerId: string
  }

  export type TriggerCreateOrConnectWithoutAutoInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutAutoInput, TriggerUncheckedCreateWithoutAutoInput>
  }

  export type ActionCreateWithoutAutoInput = {
    id?: string
    type: AvailableActionCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateWithoutAutoInput = {
    id?: string
    availableActionId: string
  }

  export type ActionCreateOrConnectWithoutAutoInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutAutoInput, ActionUncheckedCreateWithoutAutoInput>
  }

  export type ActionCreateManyAutoInputEnvelope = {
    data: ActionCreateManyAutoInput | ActionCreateManyAutoInput[]
    skipDuplicates?: boolean
  }

  export type AutoRunCreateWithoutAutoInput = {
    id?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    autoRunOutbox?: AutoRunOutboxCreateNestedOneWithoutAutoRunInput
  }

  export type AutoRunUncheckedCreateWithoutAutoInput = {
    id?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    autoRunOutbox?: AutoRunOutboxUncheckedCreateNestedOneWithoutAutoRunInput
  }

  export type AutoRunCreateOrConnectWithoutAutoInput = {
    where: AutoRunWhereUniqueInput
    create: XOR<AutoRunCreateWithoutAutoInput, AutoRunUncheckedCreateWithoutAutoInput>
  }

  export type AutoRunCreateManyAutoInputEnvelope = {
    data: AutoRunCreateManyAutoInput | AutoRunCreateManyAutoInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAutosInput = {
    update: XOR<UserUpdateWithoutAutosInput, UserUncheckedUpdateWithoutAutosInput>
    create: XOR<UserCreateWithoutAutosInput, UserUncheckedCreateWithoutAutosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAutosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAutosInput, UserUncheckedUpdateWithoutAutosInput>
  }

  export type UserUpdateWithoutAutosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutAutosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUpsertWithoutAutoInput = {
    update: XOR<TriggerUpdateWithoutAutoInput, TriggerUncheckedUpdateWithoutAutoInput>
    create: XOR<TriggerCreateWithoutAutoInput, TriggerUncheckedCreateWithoutAutoInput>
    where?: TriggerWhereInput
  }

  export type TriggerUpdateToOneWithWhereWithoutAutoInput = {
    where?: TriggerWhereInput
    data: XOR<TriggerUpdateWithoutAutoInput, TriggerUncheckedUpdateWithoutAutoInput>
  }

  export type TriggerUpdateWithoutAutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: AvailableTriggerUpdateOneRequiredWithoutTriggersNestedInput
  }

  export type TriggerUncheckedUpdateWithoutAutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    availableTriggerId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUpsertWithWhereUniqueWithoutAutoInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutAutoInput, ActionUncheckedUpdateWithoutAutoInput>
    create: XOR<ActionCreateWithoutAutoInput, ActionUncheckedCreateWithoutAutoInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutAutoInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutAutoInput, ActionUncheckedUpdateWithoutAutoInput>
  }

  export type ActionUpdateManyWithWhereWithoutAutoInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutAutoInput>
  }

  export type ActionScalarWhereInput = {
    AND?: ActionScalarWhereInput | ActionScalarWhereInput[]
    OR?: ActionScalarWhereInput[]
    NOT?: ActionScalarWhereInput | ActionScalarWhereInput[]
    id?: StringFilter<"Action"> | string
    autoId?: StringFilter<"Action"> | string
    availableActionId?: StringFilter<"Action"> | string
  }

  export type AutoRunUpsertWithWhereUniqueWithoutAutoInput = {
    where: AutoRunWhereUniqueInput
    update: XOR<AutoRunUpdateWithoutAutoInput, AutoRunUncheckedUpdateWithoutAutoInput>
    create: XOR<AutoRunCreateWithoutAutoInput, AutoRunUncheckedCreateWithoutAutoInput>
  }

  export type AutoRunUpdateWithWhereUniqueWithoutAutoInput = {
    where: AutoRunWhereUniqueInput
    data: XOR<AutoRunUpdateWithoutAutoInput, AutoRunUncheckedUpdateWithoutAutoInput>
  }

  export type AutoRunUpdateManyWithWhereWithoutAutoInput = {
    where: AutoRunScalarWhereInput
    data: XOR<AutoRunUpdateManyMutationInput, AutoRunUncheckedUpdateManyWithoutAutoInput>
  }

  export type AutoRunScalarWhereInput = {
    AND?: AutoRunScalarWhereInput | AutoRunScalarWhereInput[]
    OR?: AutoRunScalarWhereInput[]
    NOT?: AutoRunScalarWhereInput | AutoRunScalarWhereInput[]
    id?: StringFilter<"AutoRun"> | string
    autoId?: StringFilter<"AutoRun"> | string
    metadata?: JsonNullableFilter<"AutoRun">
  }

  export type AutoCreateWithoutTriggerInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutAutosInput
    action?: ActionCreateNestedManyWithoutAutoInput
    autoRuns?: AutoRunCreateNestedManyWithoutAutoInput
  }

  export type AutoUncheckedCreateWithoutTriggerInput = {
    id?: string
    userId: string
    name: string
    action?: ActionUncheckedCreateNestedManyWithoutAutoInput
    autoRuns?: AutoRunUncheckedCreateNestedManyWithoutAutoInput
  }

  export type AutoCreateOrConnectWithoutTriggerInput = {
    where: AutoWhereUniqueInput
    create: XOR<AutoCreateWithoutTriggerInput, AutoUncheckedCreateWithoutTriggerInput>
  }

  export type AvailableTriggerCreateWithoutTriggersInput = {
    id?: string
    name: string
  }

  export type AvailableTriggerUncheckedCreateWithoutTriggersInput = {
    id?: string
    name: string
  }

  export type AvailableTriggerCreateOrConnectWithoutTriggersInput = {
    where: AvailableTriggerWhereUniqueInput
    create: XOR<AvailableTriggerCreateWithoutTriggersInput, AvailableTriggerUncheckedCreateWithoutTriggersInput>
  }

  export type AutoUpsertWithoutTriggerInput = {
    update: XOR<AutoUpdateWithoutTriggerInput, AutoUncheckedUpdateWithoutTriggerInput>
    create: XOR<AutoCreateWithoutTriggerInput, AutoUncheckedCreateWithoutTriggerInput>
    where?: AutoWhereInput
  }

  export type AutoUpdateToOneWithWhereWithoutTriggerInput = {
    where?: AutoWhereInput
    data: XOR<AutoUpdateWithoutTriggerInput, AutoUncheckedUpdateWithoutTriggerInput>
  }

  export type AutoUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAutosNestedInput
    action?: ActionUpdateManyWithoutAutoNestedInput
    autoRuns?: AutoRunUpdateManyWithoutAutoNestedInput
  }

  export type AutoUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: ActionUncheckedUpdateManyWithoutAutoNestedInput
    autoRuns?: AutoRunUncheckedUpdateManyWithoutAutoNestedInput
  }

  export type AvailableTriggerUpsertWithoutTriggersInput = {
    update: XOR<AvailableTriggerUpdateWithoutTriggersInput, AvailableTriggerUncheckedUpdateWithoutTriggersInput>
    create: XOR<AvailableTriggerCreateWithoutTriggersInput, AvailableTriggerUncheckedCreateWithoutTriggersInput>
    where?: AvailableTriggerWhereInput
  }

  export type AvailableTriggerUpdateToOneWithWhereWithoutTriggersInput = {
    where?: AvailableTriggerWhereInput
    data: XOR<AvailableTriggerUpdateWithoutTriggersInput, AvailableTriggerUncheckedUpdateWithoutTriggersInput>
  }

  export type AvailableTriggerUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggerUncheckedUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateWithoutTypeInput = {
    id?: string
    auto: AutoCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutTypeInput = {
    id?: string
    autoId: string
  }

  export type TriggerCreateOrConnectWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput>
  }

  export type TriggerCreateManyTypeInputEnvelope = {
    data: TriggerCreateManyTypeInput | TriggerCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type TriggerUpsertWithWhereUniqueWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    update: XOR<TriggerUpdateWithoutTypeInput, TriggerUncheckedUpdateWithoutTypeInput>
    create: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput>
  }

  export type TriggerUpdateWithWhereUniqueWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    data: XOR<TriggerUpdateWithoutTypeInput, TriggerUncheckedUpdateWithoutTypeInput>
  }

  export type TriggerUpdateManyWithWhereWithoutTypeInput = {
    where: TriggerScalarWhereInput
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyWithoutTypeInput>
  }

  export type TriggerScalarWhereInput = {
    AND?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    OR?: TriggerScalarWhereInput[]
    NOT?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    id?: StringFilter<"Trigger"> | string
    autoId?: StringFilter<"Trigger"> | string
    availableTriggerId?: StringFilter<"Trigger"> | string
  }

  export type AutoCreateWithoutActionInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutAutosInput
    trigger?: TriggerCreateNestedOneWithoutAutoInput
    autoRuns?: AutoRunCreateNestedManyWithoutAutoInput
  }

  export type AutoUncheckedCreateWithoutActionInput = {
    id?: string
    userId: string
    name: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutAutoInput
    autoRuns?: AutoRunUncheckedCreateNestedManyWithoutAutoInput
  }

  export type AutoCreateOrConnectWithoutActionInput = {
    where: AutoWhereUniqueInput
    create: XOR<AutoCreateWithoutActionInput, AutoUncheckedCreateWithoutActionInput>
  }

  export type AvailableActionCreateWithoutActionsInput = {
    id?: string
    name: string
  }

  export type AvailableActionUncheckedCreateWithoutActionsInput = {
    id?: string
    name: string
  }

  export type AvailableActionCreateOrConnectWithoutActionsInput = {
    where: AvailableActionWhereUniqueInput
    create: XOR<AvailableActionCreateWithoutActionsInput, AvailableActionUncheckedCreateWithoutActionsInput>
  }

  export type AutoUpsertWithoutActionInput = {
    update: XOR<AutoUpdateWithoutActionInput, AutoUncheckedUpdateWithoutActionInput>
    create: XOR<AutoCreateWithoutActionInput, AutoUncheckedCreateWithoutActionInput>
    where?: AutoWhereInput
  }

  export type AutoUpdateToOneWithWhereWithoutActionInput = {
    where?: AutoWhereInput
    data: XOR<AutoUpdateWithoutActionInput, AutoUncheckedUpdateWithoutActionInput>
  }

  export type AutoUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAutosNestedInput
    trigger?: TriggerUpdateOneWithoutAutoNestedInput
    autoRuns?: AutoRunUpdateManyWithoutAutoNestedInput
  }

  export type AutoUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutAutoNestedInput
    autoRuns?: AutoRunUncheckedUpdateManyWithoutAutoNestedInput
  }

  export type AvailableActionUpsertWithoutActionsInput = {
    update: XOR<AvailableActionUpdateWithoutActionsInput, AvailableActionUncheckedUpdateWithoutActionsInput>
    create: XOR<AvailableActionCreateWithoutActionsInput, AvailableActionUncheckedCreateWithoutActionsInput>
    where?: AvailableActionWhereInput
  }

  export type AvailableActionUpdateToOneWithWhereWithoutActionsInput = {
    where?: AvailableActionWhereInput
    data: XOR<AvailableActionUpdateWithoutActionsInput, AvailableActionUncheckedUpdateWithoutActionsInput>
  }

  export type AvailableActionUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionUncheckedUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateWithoutTypeInput = {
    id?: string
    auto: AutoCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateWithoutTypeInput = {
    id?: string
    autoId: string
  }

  export type ActionCreateOrConnectWithoutTypeInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput>
  }

  export type ActionCreateManyTypeInputEnvelope = {
    data: ActionCreateManyTypeInput | ActionCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type ActionUpsertWithWhereUniqueWithoutTypeInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutTypeInput, ActionUncheckedUpdateWithoutTypeInput>
    create: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutTypeInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutTypeInput, ActionUncheckedUpdateWithoutTypeInput>
  }

  export type ActionUpdateManyWithWhereWithoutTypeInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutTypeInput>
  }

  export type AutoCreateWithoutAutoRunsInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutAutosInput
    trigger?: TriggerCreateNestedOneWithoutAutoInput
    action?: ActionCreateNestedManyWithoutAutoInput
  }

  export type AutoUncheckedCreateWithoutAutoRunsInput = {
    id?: string
    userId: string
    name: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutAutoInput
    action?: ActionUncheckedCreateNestedManyWithoutAutoInput
  }

  export type AutoCreateOrConnectWithoutAutoRunsInput = {
    where: AutoWhereUniqueInput
    create: XOR<AutoCreateWithoutAutoRunsInput, AutoUncheckedCreateWithoutAutoRunsInput>
  }

  export type AutoRunOutboxCreateWithoutAutoRunInput = {
    id?: string
  }

  export type AutoRunOutboxUncheckedCreateWithoutAutoRunInput = {
    id?: string
  }

  export type AutoRunOutboxCreateOrConnectWithoutAutoRunInput = {
    where: AutoRunOutboxWhereUniqueInput
    create: XOR<AutoRunOutboxCreateWithoutAutoRunInput, AutoRunOutboxUncheckedCreateWithoutAutoRunInput>
  }

  export type AutoUpsertWithoutAutoRunsInput = {
    update: XOR<AutoUpdateWithoutAutoRunsInput, AutoUncheckedUpdateWithoutAutoRunsInput>
    create: XOR<AutoCreateWithoutAutoRunsInput, AutoUncheckedCreateWithoutAutoRunsInput>
    where?: AutoWhereInput
  }

  export type AutoUpdateToOneWithWhereWithoutAutoRunsInput = {
    where?: AutoWhereInput
    data: XOR<AutoUpdateWithoutAutoRunsInput, AutoUncheckedUpdateWithoutAutoRunsInput>
  }

  export type AutoUpdateWithoutAutoRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAutosNestedInput
    trigger?: TriggerUpdateOneWithoutAutoNestedInput
    action?: ActionUpdateManyWithoutAutoNestedInput
  }

  export type AutoUncheckedUpdateWithoutAutoRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutAutoNestedInput
    action?: ActionUncheckedUpdateManyWithoutAutoNestedInput
  }

  export type AutoRunOutboxUpsertWithoutAutoRunInput = {
    update: XOR<AutoRunOutboxUpdateWithoutAutoRunInput, AutoRunOutboxUncheckedUpdateWithoutAutoRunInput>
    create: XOR<AutoRunOutboxCreateWithoutAutoRunInput, AutoRunOutboxUncheckedCreateWithoutAutoRunInput>
    where?: AutoRunOutboxWhereInput
  }

  export type AutoRunOutboxUpdateToOneWithWhereWithoutAutoRunInput = {
    where?: AutoRunOutboxWhereInput
    data: XOR<AutoRunOutboxUpdateWithoutAutoRunInput, AutoRunOutboxUncheckedUpdateWithoutAutoRunInput>
  }

  export type AutoRunOutboxUpdateWithoutAutoRunInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AutoRunOutboxUncheckedUpdateWithoutAutoRunInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AutoRunCreateWithoutAutoRunOutboxInput = {
    id?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    auto: AutoCreateNestedOneWithoutAutoRunsInput
  }

  export type AutoRunUncheckedCreateWithoutAutoRunOutboxInput = {
    id?: string
    autoId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AutoRunCreateOrConnectWithoutAutoRunOutboxInput = {
    where: AutoRunWhereUniqueInput
    create: XOR<AutoRunCreateWithoutAutoRunOutboxInput, AutoRunUncheckedCreateWithoutAutoRunOutboxInput>
  }

  export type AutoRunUpsertWithoutAutoRunOutboxInput = {
    update: XOR<AutoRunUpdateWithoutAutoRunOutboxInput, AutoRunUncheckedUpdateWithoutAutoRunOutboxInput>
    create: XOR<AutoRunCreateWithoutAutoRunOutboxInput, AutoRunUncheckedCreateWithoutAutoRunOutboxInput>
    where?: AutoRunWhereInput
  }

  export type AutoRunUpdateToOneWithWhereWithoutAutoRunOutboxInput = {
    where?: AutoRunWhereInput
    data: XOR<AutoRunUpdateWithoutAutoRunOutboxInput, AutoRunUncheckedUpdateWithoutAutoRunOutboxInput>
  }

  export type AutoRunUpdateWithoutAutoRunOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    auto?: AutoUpdateOneRequiredWithoutAutoRunsNestedInput
  }

  export type AutoRunUncheckedUpdateWithoutAutoRunOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    autoId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AutoCreateManyUserInput = {
    id?: string
    name: string
  }

  export type AutoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutAutoNestedInput
    action?: ActionUpdateManyWithoutAutoNestedInput
    autoRuns?: AutoRunUpdateManyWithoutAutoNestedInput
  }

  export type AutoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutAutoNestedInput
    action?: ActionUncheckedUpdateManyWithoutAutoNestedInput
    autoRuns?: AutoRunUncheckedUpdateManyWithoutAutoNestedInput
  }

  export type AutoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateManyAutoInput = {
    id?: string
    availableActionId: string
  }

  export type AutoRunCreateManyAutoInput = {
    id?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ActionUpdateWithoutAutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: AvailableActionUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateWithoutAutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    availableActionId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUncheckedUpdateManyWithoutAutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    availableActionId?: StringFieldUpdateOperationsInput | string
  }

  export type AutoRunUpdateWithoutAutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    autoRunOutbox?: AutoRunOutboxUpdateOneWithoutAutoRunNestedInput
  }

  export type AutoRunUncheckedUpdateWithoutAutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    autoRunOutbox?: AutoRunOutboxUncheckedUpdateOneWithoutAutoRunNestedInput
  }

  export type AutoRunUncheckedUpdateManyWithoutAutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TriggerCreateManyTypeInput = {
    id?: string
    autoId: string
  }

  export type TriggerUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    auto?: AutoUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    autoId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    autoId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateManyTypeInput = {
    id?: string
    autoId: string
  }

  export type ActionUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    auto?: AutoUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    autoId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    autoId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}