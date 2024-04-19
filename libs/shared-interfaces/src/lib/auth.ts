interface ProactiveRefresh {
  user: UserImpl; // Reference to UserImpl to handle circular dependency
  isRunning: boolean;
  timerId: null | number;
  errorBackoff: number;
}

interface ReloadUserInfo {
  localId: string;
  email: string;
  passwordHash: string;
  emailVerified: boolean;
  passwordUpdatedAt: number;
  providerUserInfo: ProviderUserInfo[];
  validSince: string;
  lastLoginAt: string;
  createdAt: string;
  lastRefreshAt: string;
}

interface ProviderUserInfo {
  providerId: string;
  uid: string;
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
}

interface StsTokenManager {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}

interface UserMetadata {
  createdAt: string;
  lastLoginAt: string;
  lastSignInTime: string;
  creationTime: string;
}

interface AuthImpl {
  app: FirebaseAppImpl;
  heartbeatServiceProvider: ServiceProvider;
  appCheckServiceProvider: ServiceProvider;
  config: AuthConfig;
  currentUser: UserImpl;
  emulatorConfig: any | null;
  operations: Promise<void>;
  authStateSubscription: Subscription;
  idTokenSubscription: Subscription;
  beforeStateQueue: AuthMiddlewareQueue;
  redirectUser: any | null;
  isProactiveRefreshEnabled: boolean;
  EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION: number;
  _canInitEmulator: boolean;
  _isInitialized: boolean;
  _deleted: boolean;
  _initializationPromise: Promise<void>;
  _popupRedirectResolver: any | null;
  _errorFactory: ErrorFactory;
  _agentRecaptchaConfig: any | null;
  _tenantRecaptchaConfigs: Record<string, any>;
  _projectPasswordPolicy: any | null;
  _tenantPasswordPolicies: Record<string, any>;
  lastNotifiedUid: string;
  languageCode: string | null;
  tenantId: string | null;
  settings: AuthSettings;
  frameworks: string[];
  name: string;
  clientVersion: string;
  persistenceManager: PersistenceUserManager;
}

interface FirebaseAppImpl {
  _isDeleted: boolean;
  _options: any; // Further definition might be needed based on actual option types
  _config: any;
  _name: string;
  _automaticDataCollectionEnabled: boolean;
  _container: any; // Define more precisely if necessary
}

interface ServiceProvider {
  name: string;
  container: any; // Define more precisely if necessary
  component: any; // Define more precisely if necessary
  instances: Map<any, any>;
  instancesDeferred: Map<any, any>;
  instancesOptions: Map<any, any>;
  onInitCallbacks: Map<any, any>;
}

interface Subscription {
  auth: AuthImpl;
  observer: any; // Define more precisely if necessary
  addObserver: Function;
}

interface AuthMiddlewareQueue {
  auth: AuthImpl;
  queue: any[];
}

interface ErrorFactory {
  service: string;
  serviceName: string;
  errors: Record<string, any>;
}

interface AuthSettings {
  appVerificationDisabledForTesting: boolean;
}

interface PersistenceUserManager {
  persistence: any; // Define more precisely if necessary
  auth: AuthImpl;
  userKey: string;
  fullUserKey: string;
  fullPersistenceKey: string;
  boundEventHandler: Function;
}

export interface UserImpl {
  providerId: string;
  proactiveRefresh: ProactiveRefresh;
  reloadUserInfo: ReloadUserInfo;
  reloadListener: any | null;
  uid: string;
  auth: AuthImpl;
  stsTokenManager: StsTokenManager;
  accessToken: string;
  displayName: string | null;
  email: string;
  emailVerified: boolean;
  phoneNumber: string | null;
  photoURL: string | null;
  isAnonymous: boolean;
  tenantId: string | null;
  providerData: ProviderUserInfo[];
  metadata: UserMetadata;
}
