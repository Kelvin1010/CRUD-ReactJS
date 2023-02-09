import React from 'react';
import {
    createStyles,
    Header,
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
  } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { useDisclosure } from '@mantine/hooks';
import { RepeatIcon } from '@chakra-ui/icons';

  
const useStyles = createStyles((theme) => ({
    link: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,
  
      [theme.fn.smallerThan('sm')]: {
        height: 42,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      },
  
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      }),
    },
  
    subLink: {
      width: '100%',
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      borderRadius: theme.radius.md,
  
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      }),
  
      '&:active': theme.activeStyles,
    },
  
    dropdownFooter: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      margin: -theme.spacing.md,
      marginTop: theme.spacing.sm,
      padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
      paddingBottom: theme.spacing.xl,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    hiddenMobile: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    hiddenDesktop: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  }));
  
const mockdata = [
    {
      title: 'Open source',
      description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
      title: 'Free for everyone',
      description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
      title: 'Documentation',
      description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
      title: 'Security',
      description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
      title: 'Analytics',
      description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
      title: 'Notifications',
      description: 'Combusken battles with the intensely hot flames it spews',
    },
];
  

function Head() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { classes, theme } = useStyles();

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
        <Group noWrap align="flex-start">
            <div>
              <Text size="sm" weight={500}>
                  {item.title}
              </Text>
              <Text size="xs" color="dimmed">
                  {item.description}
              </Text>
            </div>
        </Group>
        </UnstyledButton>
    ));

    return (
        <Box pb={120}>
        <Header height={60} px="md">
            <Group position="apart" sx={{ height: '100%' }}>
            <MantineLogo size={30} />

            <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                <a href="#" className={classes.link}>
                Home
                </a>
                <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                    <a href="#" className={classes.link}>
                    <Center inline>
                        <Box component="span" mr={5}>
                        Features
                        </Box>
                        <RepeatIcon  size={16} color={theme.fn.primaryColor()} />
                    </Center>
                    </a>
                </HoverCard.Target>
                </HoverCard>
                <a href="#" className={classes.link}>
                Learn
                </a>
                <a href="#" className={classes.link}>
                Academy
                </a>
            </Group>

            <Group className={classes.hiddenMobile}>
                <Button variant="default">Log in</Button>
                <Button>Sign up</Button>
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
            </Group>
        </Header>

        <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            size="100%"
            padding="md"
            title="Navigation"
            className={classes.hiddenDesktop}
            zIndex={1000000}
        >
            <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

            <a href="#" className={classes.link}>
                Home
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
                <Center inline>
                <Box component="span" mr={5}>
                    Features
                </Box>
                <RepeatIcon  size={16} color={theme.fn.primaryColor()} />
                </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={classes.link}>
                Learn
            </a>
            <a href="#" className={classes.link}>
                Academy
            </a>

            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

            <Group position="center" grow pb="xl" px="md">
                <Button variant="default">Log in</Button>
                <Button>Sign up</Button>
            </Group>
            </ScrollArea>
        </Drawer>
        </Box>
    );
}

export default Head