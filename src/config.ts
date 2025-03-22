const EnvConfig = {
  API_URL: import.meta.env.VITE_API_URL,
  I18N_DEFAULT_LANGUAGE: import.meta.env.I18N_DEFAULT_LANGUAGE ?? "en",
  IS_DEV_MODE: import.meta.env.DEV
};

export default EnvConfig;
