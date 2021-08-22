import { Content, ContentHeader, ContentWrapper } from "../common/content";
import { CssBaseline } from "@material-ui/core";
import Box, { BoxBody, BoxFooter, BoxHeader, BoxTitle } from "../common/box";
import { Fragment } from "react";

const DashboardPageIndex = () => {
  return (
    <Fragment>
      <CssBaseline />
      <ContentWrapper>
        <ContentHeader title="Contoh" subtitle="Preview" />
        <Content>
          <Box>
            <BoxHeader>
              <BoxTitle>Sample</BoxTitle>
            </BoxHeader>
            <BoxBody>Uji Coba</BoxBody>
            <BoxFooter>Footer disini ya</BoxFooter>
          </Box>
        </Content>
      </ContentWrapper>
    </Fragment>
  );
};

export default DashboardPageIndex;
