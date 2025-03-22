import LanguageSelector from "@src/components/languageSelector";
import { useCustomTranslation } from "@src/hooks/useTranslation";

const Home = () => {
  const { t } = useCustomTranslation({ keyPrefix: "HOME_PAGE" });

  return (
    <>
      <div className="text-6xl">
        <h1 className="text-primary">ReKruiter</h1>
        <h1 className="text-warning">{t("HEADER_TITLE")}</h1>
        <LanguageSelector />
      </div>
    </>
  );
};
export default Home;
