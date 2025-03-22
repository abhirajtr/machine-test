import { useTranslation as i18nTranslation } from "react-i18next";

interface IUserTranlsationProps {
  keyPrefix?: string;
}
export const useCustomTranslation = ({ keyPrefix }: IUserTranlsationProps) => {
  const { t: breadcrumbT } = i18nTranslation("translation", {
    keyPrefix: "BREADCRUMBS"
  });
  const { t: commonT } = i18nTranslation("translation", {
    keyPrefix: "COMMON"
  });
  const { t } = keyPrefix
    ? i18nTranslation("translation", { keyPrefix })
    : i18nTranslation();

  return { t, breadcrumbT, commonT };
};
