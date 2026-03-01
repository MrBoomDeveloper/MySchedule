interface ImportMetaEnv {
    /**
     * Whatever anyone can create an account or not.
     */
    readonly REGISTRATION_ENABLED: string;
    
    readonly JWT_SECRET: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}