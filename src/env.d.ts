interface ImportMetaEnv {
    /**
     * Whatever anyone can create an account or not.
     */
    readonly REGISTRATION_ENABLED: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}