import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabIndicator,
  TabPanel,
  Select,
  Grid,
  VStack,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function SearchProperty() {
  return (
    <>
      <div className="container mx-auto bg-gray-100 px-5 py-24">
        <h1 className="text-4xl font-medium py-5">
          Let's Find your <span className="text-cyan-600"> Dream House</span>{" "}
        </h1>
        <Tabs position="relative" variant="line" colorScheme="green">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid templateColumns="repeat(4, 1fr)" gap={5}>
                <VStack>
                  <Text mb="8px" textAlign="left">
                    Location
                  </Text>
                  <Select
                    icon={<ChevronDownIcon />}
                    placeholder="Los Angeles, California" >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </VStack>

                <VStack>
                  <Text mb="8px" textAlign="left">
                    Type
                  </Text>
                  <Select icon={<ChevronDownIcon />} placeholder="House">
                    <option value="option1">House</option>
                    <option value="option2">Land</option>
                    <option value="option3">Car</option>
                  </Select>
                </VStack>

                <VStack>
                  <Text mb="8px" textAlign="left">
                    Price Range
                  </Text>
                  <Select
                    icon={<ChevronDownIcon />}
                    placeholder="$10,000 - $50,000"
                  >
                    <option value="option1">$10,000 - $50,000</option>
                    <option value="option2">$60,000 - $100,000</option>
                    <option value="option3">$110,000 - $200,000</option>
                  </Select>
                </VStack>
              </Grid>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
}
