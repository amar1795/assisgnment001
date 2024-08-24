
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
 * Model WeatherStation
 * 
 */
export type WeatherStation = $Result.DefaultSelection<Prisma.$WeatherStationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more WeatherStations
 * const weatherStations = await prisma.weatherStation.findMany()
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
   * // Fetch zero or more WeatherStations
   * const weatherStations = await prisma.weatherStation.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.weatherStation`: Exposes CRUD operations for the **WeatherStation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeatherStations
    * const weatherStations = await prisma.weatherStation.findMany()
    * ```
    */
  get weatherStation(): Prisma.WeatherStationDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    WeatherStation: 'WeatherStation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "weatherStation"
      txIsolationLevel: never
    }
    model: {
      WeatherStation: {
        payload: Prisma.$WeatherStationPayload<ExtArgs>
        fields: Prisma.WeatherStationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeatherStationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherStationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeatherStationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherStationPayload>
          }
          findFirst: {
            args: Prisma.WeatherStationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherStationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeatherStationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherStationPayload>
          }
          findMany: {
            args: Prisma.WeatherStationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherStationPayload>[]
          }
          create: {
            args: Prisma.WeatherStationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherStationPayload>
          }
          createMany: {
            args: Prisma.WeatherStationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WeatherStationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherStationPayload>
          }
          update: {
            args: Prisma.WeatherStationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherStationPayload>
          }
          deleteMany: {
            args: Prisma.WeatherStationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeatherStationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WeatherStationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherStationPayload>
          }
          aggregate: {
            args: Prisma.WeatherStationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeatherStation>
          }
          groupBy: {
            args: Prisma.WeatherStationGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeatherStationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.WeatherStationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.WeatherStationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.WeatherStationCountArgs<ExtArgs>
            result: $Utils.Optional<WeatherStationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    }
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
   * Models
   */

  /**
   * Model WeatherStation
   */

  export type AggregateWeatherStation = {
    _count: WeatherStationCountAggregateOutputType | null
    _avg: WeatherStationAvgAggregateOutputType | null
    _sum: WeatherStationSumAggregateOutputType | null
    _min: WeatherStationMinAggregateOutputType | null
    _max: WeatherStationMaxAggregateOutputType | null
  }

  export type WeatherStationAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type WeatherStationSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type WeatherStationMinAggregateOutputType = {
    id: string | null
    cityName: string | null
    localityName: string | null
    localityId: string | null
    latitude: number | null
    longitude: number | null
    deviceType: string | null
  }

  export type WeatherStationMaxAggregateOutputType = {
    id: string | null
    cityName: string | null
    localityName: string | null
    localityId: string | null
    latitude: number | null
    longitude: number | null
    deviceType: string | null
  }

  export type WeatherStationCountAggregateOutputType = {
    id: number
    cityName: number
    localityName: number
    localityId: number
    latitude: number
    longitude: number
    deviceType: number
    _all: number
  }


  export type WeatherStationAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type WeatherStationSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type WeatherStationMinAggregateInputType = {
    id?: true
    cityName?: true
    localityName?: true
    localityId?: true
    latitude?: true
    longitude?: true
    deviceType?: true
  }

  export type WeatherStationMaxAggregateInputType = {
    id?: true
    cityName?: true
    localityName?: true
    localityId?: true
    latitude?: true
    longitude?: true
    deviceType?: true
  }

  export type WeatherStationCountAggregateInputType = {
    id?: true
    cityName?: true
    localityName?: true
    localityId?: true
    latitude?: true
    longitude?: true
    deviceType?: true
    _all?: true
  }

  export type WeatherStationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeatherStation to aggregate.
     */
    where?: WeatherStationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherStations to fetch.
     */
    orderBy?: WeatherStationOrderByWithRelationInput | WeatherStationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeatherStationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherStations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeatherStations
    **/
    _count?: true | WeatherStationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeatherStationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeatherStationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeatherStationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeatherStationMaxAggregateInputType
  }

  export type GetWeatherStationAggregateType<T extends WeatherStationAggregateArgs> = {
        [P in keyof T & keyof AggregateWeatherStation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeatherStation[P]>
      : GetScalarType<T[P], AggregateWeatherStation[P]>
  }




  export type WeatherStationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeatherStationWhereInput
    orderBy?: WeatherStationOrderByWithAggregationInput | WeatherStationOrderByWithAggregationInput[]
    by: WeatherStationScalarFieldEnum[] | WeatherStationScalarFieldEnum
    having?: WeatherStationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeatherStationCountAggregateInputType | true
    _avg?: WeatherStationAvgAggregateInputType
    _sum?: WeatherStationSumAggregateInputType
    _min?: WeatherStationMinAggregateInputType
    _max?: WeatherStationMaxAggregateInputType
  }

  export type WeatherStationGroupByOutputType = {
    id: string
    cityName: string
    localityName: string
    localityId: string
    latitude: number
    longitude: number
    deviceType: string
    _count: WeatherStationCountAggregateOutputType | null
    _avg: WeatherStationAvgAggregateOutputType | null
    _sum: WeatherStationSumAggregateOutputType | null
    _min: WeatherStationMinAggregateOutputType | null
    _max: WeatherStationMaxAggregateOutputType | null
  }

  type GetWeatherStationGroupByPayload<T extends WeatherStationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeatherStationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeatherStationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeatherStationGroupByOutputType[P]>
            : GetScalarType<T[P], WeatherStationGroupByOutputType[P]>
        }
      >
    >


  export type WeatherStationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cityName?: boolean
    localityName?: boolean
    localityId?: boolean
    latitude?: boolean
    longitude?: boolean
    deviceType?: boolean
  }, ExtArgs["result"]["weatherStation"]>


  export type WeatherStationSelectScalar = {
    id?: boolean
    cityName?: boolean
    localityName?: boolean
    localityId?: boolean
    latitude?: boolean
    longitude?: boolean
    deviceType?: boolean
  }


  export type $WeatherStationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeatherStation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cityName: string
      localityName: string
      localityId: string
      latitude: number
      longitude: number
      deviceType: string
    }, ExtArgs["result"]["weatherStation"]>
    composites: {}
  }

  type WeatherStationGetPayload<S extends boolean | null | undefined | WeatherStationDefaultArgs> = $Result.GetResult<Prisma.$WeatherStationPayload, S>

  type WeatherStationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WeatherStationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WeatherStationCountAggregateInputType | true
    }

  export interface WeatherStationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeatherStation'], meta: { name: 'WeatherStation' } }
    /**
     * Find zero or one WeatherStation that matches the filter.
     * @param {WeatherStationFindUniqueArgs} args - Arguments to find a WeatherStation
     * @example
     * // Get one WeatherStation
     * const weatherStation = await prisma.weatherStation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeatherStationFindUniqueArgs>(args: SelectSubset<T, WeatherStationFindUniqueArgs<ExtArgs>>): Prisma__WeatherStationClient<$Result.GetResult<Prisma.$WeatherStationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WeatherStation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WeatherStationFindUniqueOrThrowArgs} args - Arguments to find a WeatherStation
     * @example
     * // Get one WeatherStation
     * const weatherStation = await prisma.weatherStation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeatherStationFindUniqueOrThrowArgs>(args: SelectSubset<T, WeatherStationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeatherStationClient<$Result.GetResult<Prisma.$WeatherStationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WeatherStation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherStationFindFirstArgs} args - Arguments to find a WeatherStation
     * @example
     * // Get one WeatherStation
     * const weatherStation = await prisma.weatherStation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeatherStationFindFirstArgs>(args?: SelectSubset<T, WeatherStationFindFirstArgs<ExtArgs>>): Prisma__WeatherStationClient<$Result.GetResult<Prisma.$WeatherStationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WeatherStation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherStationFindFirstOrThrowArgs} args - Arguments to find a WeatherStation
     * @example
     * // Get one WeatherStation
     * const weatherStation = await prisma.weatherStation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeatherStationFindFirstOrThrowArgs>(args?: SelectSubset<T, WeatherStationFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeatherStationClient<$Result.GetResult<Prisma.$WeatherStationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WeatherStations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherStationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeatherStations
     * const weatherStations = await prisma.weatherStation.findMany()
     * 
     * // Get first 10 WeatherStations
     * const weatherStations = await prisma.weatherStation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weatherStationWithIdOnly = await prisma.weatherStation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeatherStationFindManyArgs>(args?: SelectSubset<T, WeatherStationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherStationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WeatherStation.
     * @param {WeatherStationCreateArgs} args - Arguments to create a WeatherStation.
     * @example
     * // Create one WeatherStation
     * const WeatherStation = await prisma.weatherStation.create({
     *   data: {
     *     // ... data to create a WeatherStation
     *   }
     * })
     * 
     */
    create<T extends WeatherStationCreateArgs>(args: SelectSubset<T, WeatherStationCreateArgs<ExtArgs>>): Prisma__WeatherStationClient<$Result.GetResult<Prisma.$WeatherStationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WeatherStations.
     * @param {WeatherStationCreateManyArgs} args - Arguments to create many WeatherStations.
     * @example
     * // Create many WeatherStations
     * const weatherStation = await prisma.weatherStation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeatherStationCreateManyArgs>(args?: SelectSubset<T, WeatherStationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WeatherStation.
     * @param {WeatherStationDeleteArgs} args - Arguments to delete one WeatherStation.
     * @example
     * // Delete one WeatherStation
     * const WeatherStation = await prisma.weatherStation.delete({
     *   where: {
     *     // ... filter to delete one WeatherStation
     *   }
     * })
     * 
     */
    delete<T extends WeatherStationDeleteArgs>(args: SelectSubset<T, WeatherStationDeleteArgs<ExtArgs>>): Prisma__WeatherStationClient<$Result.GetResult<Prisma.$WeatherStationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WeatherStation.
     * @param {WeatherStationUpdateArgs} args - Arguments to update one WeatherStation.
     * @example
     * // Update one WeatherStation
     * const weatherStation = await prisma.weatherStation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeatherStationUpdateArgs>(args: SelectSubset<T, WeatherStationUpdateArgs<ExtArgs>>): Prisma__WeatherStationClient<$Result.GetResult<Prisma.$WeatherStationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WeatherStations.
     * @param {WeatherStationDeleteManyArgs} args - Arguments to filter WeatherStations to delete.
     * @example
     * // Delete a few WeatherStations
     * const { count } = await prisma.weatherStation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeatherStationDeleteManyArgs>(args?: SelectSubset<T, WeatherStationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeatherStations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherStationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeatherStations
     * const weatherStation = await prisma.weatherStation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeatherStationUpdateManyArgs>(args: SelectSubset<T, WeatherStationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WeatherStation.
     * @param {WeatherStationUpsertArgs} args - Arguments to update or create a WeatherStation.
     * @example
     * // Update or create a WeatherStation
     * const weatherStation = await prisma.weatherStation.upsert({
     *   create: {
     *     // ... data to create a WeatherStation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeatherStation we want to update
     *   }
     * })
     */
    upsert<T extends WeatherStationUpsertArgs>(args: SelectSubset<T, WeatherStationUpsertArgs<ExtArgs>>): Prisma__WeatherStationClient<$Result.GetResult<Prisma.$WeatherStationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more WeatherStations that matches the filter.
     * @param {WeatherStationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const weatherStation = await prisma.weatherStation.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: WeatherStationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a WeatherStation.
     * @param {WeatherStationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const weatherStation = await prisma.weatherStation.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: WeatherStationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of WeatherStations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherStationCountArgs} args - Arguments to filter WeatherStations to count.
     * @example
     * // Count the number of WeatherStations
     * const count = await prisma.weatherStation.count({
     *   where: {
     *     // ... the filter for the WeatherStations we want to count
     *   }
     * })
    **/
    count<T extends WeatherStationCountArgs>(
      args?: Subset<T, WeatherStationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeatherStationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeatherStation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherStationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeatherStationAggregateArgs>(args: Subset<T, WeatherStationAggregateArgs>): Prisma.PrismaPromise<GetWeatherStationAggregateType<T>>

    /**
     * Group by WeatherStation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherStationGroupByArgs} args - Group by arguments.
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
      T extends WeatherStationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeatherStationGroupByArgs['orderBy'] }
        : { orderBy?: WeatherStationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeatherStationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeatherStationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeatherStation model
   */
  readonly fields: WeatherStationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeatherStation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeatherStationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the WeatherStation model
   */ 
  interface WeatherStationFieldRefs {
    readonly id: FieldRef<"WeatherStation", 'String'>
    readonly cityName: FieldRef<"WeatherStation", 'String'>
    readonly localityName: FieldRef<"WeatherStation", 'String'>
    readonly localityId: FieldRef<"WeatherStation", 'String'>
    readonly latitude: FieldRef<"WeatherStation", 'Float'>
    readonly longitude: FieldRef<"WeatherStation", 'Float'>
    readonly deviceType: FieldRef<"WeatherStation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WeatherStation findUnique
   */
  export type WeatherStationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherStation
     */
    select?: WeatherStationSelect<ExtArgs> | null
    /**
     * Filter, which WeatherStation to fetch.
     */
    where: WeatherStationWhereUniqueInput
  }

  /**
   * WeatherStation findUniqueOrThrow
   */
  export type WeatherStationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherStation
     */
    select?: WeatherStationSelect<ExtArgs> | null
    /**
     * Filter, which WeatherStation to fetch.
     */
    where: WeatherStationWhereUniqueInput
  }

  /**
   * WeatherStation findFirst
   */
  export type WeatherStationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherStation
     */
    select?: WeatherStationSelect<ExtArgs> | null
    /**
     * Filter, which WeatherStation to fetch.
     */
    where?: WeatherStationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherStations to fetch.
     */
    orderBy?: WeatherStationOrderByWithRelationInput | WeatherStationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeatherStations.
     */
    cursor?: WeatherStationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherStations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeatherStations.
     */
    distinct?: WeatherStationScalarFieldEnum | WeatherStationScalarFieldEnum[]
  }

  /**
   * WeatherStation findFirstOrThrow
   */
  export type WeatherStationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherStation
     */
    select?: WeatherStationSelect<ExtArgs> | null
    /**
     * Filter, which WeatherStation to fetch.
     */
    where?: WeatherStationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherStations to fetch.
     */
    orderBy?: WeatherStationOrderByWithRelationInput | WeatherStationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeatherStations.
     */
    cursor?: WeatherStationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherStations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeatherStations.
     */
    distinct?: WeatherStationScalarFieldEnum | WeatherStationScalarFieldEnum[]
  }

  /**
   * WeatherStation findMany
   */
  export type WeatherStationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherStation
     */
    select?: WeatherStationSelect<ExtArgs> | null
    /**
     * Filter, which WeatherStations to fetch.
     */
    where?: WeatherStationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherStations to fetch.
     */
    orderBy?: WeatherStationOrderByWithRelationInput | WeatherStationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeatherStations.
     */
    cursor?: WeatherStationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherStations.
     */
    skip?: number
    distinct?: WeatherStationScalarFieldEnum | WeatherStationScalarFieldEnum[]
  }

  /**
   * WeatherStation create
   */
  export type WeatherStationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherStation
     */
    select?: WeatherStationSelect<ExtArgs> | null
    /**
     * The data needed to create a WeatherStation.
     */
    data: XOR<WeatherStationCreateInput, WeatherStationUncheckedCreateInput>
  }

  /**
   * WeatherStation createMany
   */
  export type WeatherStationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeatherStations.
     */
    data: WeatherStationCreateManyInput | WeatherStationCreateManyInput[]
  }

  /**
   * WeatherStation update
   */
  export type WeatherStationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherStation
     */
    select?: WeatherStationSelect<ExtArgs> | null
    /**
     * The data needed to update a WeatherStation.
     */
    data: XOR<WeatherStationUpdateInput, WeatherStationUncheckedUpdateInput>
    /**
     * Choose, which WeatherStation to update.
     */
    where: WeatherStationWhereUniqueInput
  }

  /**
   * WeatherStation updateMany
   */
  export type WeatherStationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeatherStations.
     */
    data: XOR<WeatherStationUpdateManyMutationInput, WeatherStationUncheckedUpdateManyInput>
    /**
     * Filter which WeatherStations to update
     */
    where?: WeatherStationWhereInput
  }

  /**
   * WeatherStation upsert
   */
  export type WeatherStationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherStation
     */
    select?: WeatherStationSelect<ExtArgs> | null
    /**
     * The filter to search for the WeatherStation to update in case it exists.
     */
    where: WeatherStationWhereUniqueInput
    /**
     * In case the WeatherStation found by the `where` argument doesn't exist, create a new WeatherStation with this data.
     */
    create: XOR<WeatherStationCreateInput, WeatherStationUncheckedCreateInput>
    /**
     * In case the WeatherStation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeatherStationUpdateInput, WeatherStationUncheckedUpdateInput>
  }

  /**
   * WeatherStation delete
   */
  export type WeatherStationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherStation
     */
    select?: WeatherStationSelect<ExtArgs> | null
    /**
     * Filter which WeatherStation to delete.
     */
    where: WeatherStationWhereUniqueInput
  }

  /**
   * WeatherStation deleteMany
   */
  export type WeatherStationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeatherStations to delete
     */
    where?: WeatherStationWhereInput
  }

  /**
   * WeatherStation findRaw
   */
  export type WeatherStationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * WeatherStation aggregateRaw
   */
  export type WeatherStationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * WeatherStation without action
   */
  export type WeatherStationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherStation
     */
    select?: WeatherStationSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const WeatherStationScalarFieldEnum: {
    id: 'id',
    cityName: 'cityName',
    localityName: 'localityName',
    localityId: 'localityId',
    latitude: 'latitude',
    longitude: 'longitude',
    deviceType: 'deviceType'
  };

  export type WeatherStationScalarFieldEnum = (typeof WeatherStationScalarFieldEnum)[keyof typeof WeatherStationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


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


  export type WeatherStationWhereInput = {
    AND?: WeatherStationWhereInput | WeatherStationWhereInput[]
    OR?: WeatherStationWhereInput[]
    NOT?: WeatherStationWhereInput | WeatherStationWhereInput[]
    id?: StringFilter<"WeatherStation"> | string
    cityName?: StringFilter<"WeatherStation"> | string
    localityName?: StringFilter<"WeatherStation"> | string
    localityId?: StringFilter<"WeatherStation"> | string
    latitude?: FloatFilter<"WeatherStation"> | number
    longitude?: FloatFilter<"WeatherStation"> | number
    deviceType?: StringFilter<"WeatherStation"> | string
  }

  export type WeatherStationOrderByWithRelationInput = {
    id?: SortOrder
    cityName?: SortOrder
    localityName?: SortOrder
    localityId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    deviceType?: SortOrder
  }

  export type WeatherStationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WeatherStationWhereInput | WeatherStationWhereInput[]
    OR?: WeatherStationWhereInput[]
    NOT?: WeatherStationWhereInput | WeatherStationWhereInput[]
    cityName?: StringFilter<"WeatherStation"> | string
    localityName?: StringFilter<"WeatherStation"> | string
    localityId?: StringFilter<"WeatherStation"> | string
    latitude?: FloatFilter<"WeatherStation"> | number
    longitude?: FloatFilter<"WeatherStation"> | number
    deviceType?: StringFilter<"WeatherStation"> | string
  }, "id">

  export type WeatherStationOrderByWithAggregationInput = {
    id?: SortOrder
    cityName?: SortOrder
    localityName?: SortOrder
    localityId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    deviceType?: SortOrder
    _count?: WeatherStationCountOrderByAggregateInput
    _avg?: WeatherStationAvgOrderByAggregateInput
    _max?: WeatherStationMaxOrderByAggregateInput
    _min?: WeatherStationMinOrderByAggregateInput
    _sum?: WeatherStationSumOrderByAggregateInput
  }

  export type WeatherStationScalarWhereWithAggregatesInput = {
    AND?: WeatherStationScalarWhereWithAggregatesInput | WeatherStationScalarWhereWithAggregatesInput[]
    OR?: WeatherStationScalarWhereWithAggregatesInput[]
    NOT?: WeatherStationScalarWhereWithAggregatesInput | WeatherStationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeatherStation"> | string
    cityName?: StringWithAggregatesFilter<"WeatherStation"> | string
    localityName?: StringWithAggregatesFilter<"WeatherStation"> | string
    localityId?: StringWithAggregatesFilter<"WeatherStation"> | string
    latitude?: FloatWithAggregatesFilter<"WeatherStation"> | number
    longitude?: FloatWithAggregatesFilter<"WeatherStation"> | number
    deviceType?: StringWithAggregatesFilter<"WeatherStation"> | string
  }

  export type WeatherStationCreateInput = {
    id?: string
    cityName: string
    localityName: string
    localityId: string
    latitude: number
    longitude: number
    deviceType: string
  }

  export type WeatherStationUncheckedCreateInput = {
    id?: string
    cityName: string
    localityName: string
    localityId: string
    latitude: number
    longitude: number
    deviceType: string
  }

  export type WeatherStationUpdateInput = {
    cityName?: StringFieldUpdateOperationsInput | string
    localityName?: StringFieldUpdateOperationsInput | string
    localityId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
  }

  export type WeatherStationUncheckedUpdateInput = {
    cityName?: StringFieldUpdateOperationsInput | string
    localityName?: StringFieldUpdateOperationsInput | string
    localityId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
  }

  export type WeatherStationCreateManyInput = {
    id?: string
    cityName: string
    localityName: string
    localityId: string
    latitude: number
    longitude: number
    deviceType: string
  }

  export type WeatherStationUpdateManyMutationInput = {
    cityName?: StringFieldUpdateOperationsInput | string
    localityName?: StringFieldUpdateOperationsInput | string
    localityId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
  }

  export type WeatherStationUncheckedUpdateManyInput = {
    cityName?: StringFieldUpdateOperationsInput | string
    localityName?: StringFieldUpdateOperationsInput | string
    localityId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type WeatherStationCountOrderByAggregateInput = {
    id?: SortOrder
    cityName?: SortOrder
    localityName?: SortOrder
    localityId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    deviceType?: SortOrder
  }

  export type WeatherStationAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type WeatherStationMaxOrderByAggregateInput = {
    id?: SortOrder
    cityName?: SortOrder
    localityName?: SortOrder
    localityId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    deviceType?: SortOrder
  }

  export type WeatherStationMinOrderByAggregateInput = {
    id?: SortOrder
    cityName?: SortOrder
    localityName?: SortOrder
    localityId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    deviceType?: SortOrder
  }

  export type WeatherStationSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use WeatherStationDefaultArgs instead
     */
    export type WeatherStationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WeatherStationDefaultArgs<ExtArgs>

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