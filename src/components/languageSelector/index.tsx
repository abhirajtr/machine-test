import Icon, { IconName } from "@src/components/customIcon";
import config from "@src/config";
import { Dropdown, MenuProps, Space } from "antd";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "@components/typography";
import { ChevronDown } from "lucide-react";

const languageList = [
  {
    key: "en",
    label: "EN",
    iconName: "UnitedKingdomFlag",
    icon: <Icon name="UnitedKingdomFlag" isHoverable />
  },
  {
    key: "de",
    label: "DE",
    iconName: "GermanFlag",
    icon: <Icon name="GermanFlag" isHoverable />
  }
];

const LanguageSelector = () => {
  const [language, updateLanguage] = useState(languageList[0]);
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    const selectedLanguage = languageList.find(
      language => language.key === lang
    );
    i18n.changeLanguage(lang);
    updateLanguage(selectedLanguage ?? languageList[0]);
  };
  const handleLanguageChange: MenuProps["onClick"] = event => {
    changeLanguage(event.key);
  };

  const menuItems = useMemo(
    () =>
      languageList.map(language => ({
        key: language.key,
        label: (
          <div className="flex items-center">
            <Icon name={language.iconName as IconName} isHoverable />
            <span className="ml-1">{language.label}</span>
          </div>
        )
      })),
    []
  );

  useEffect(() => {
    changeLanguage(i18n?.language ?? config?.I18N_DEFAULT_LANGUAGE);
  }, []);

  return (
    <>
      <Space>
        <Dropdown
          trigger={["click"]}
          arrow
          placement="bottom"
          menu={{
            items: menuItems,
            onClick: handleLanguageChange
          }}
        >
          <div className="flex items-center cursor-pointer">
            <Icon size="medium" name={language.iconName as IconName} />
            <Text strong className="ml-1">
              {language?.label}
            </Text>
            <ChevronDown size={19} strokeWidth={3} />
          </div>
        </Dropdown>
      </Space>
    </>
  );
};

export default LanguageSelector;
