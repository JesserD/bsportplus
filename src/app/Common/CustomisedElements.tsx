import { Flex, FlexProps, Heading, UnorderedList, OrderedList, HeadingProps, ListProps, chakra } from '@chakra-ui/react';
import * as React from 'react';
import * as Styles from './MyStyles';

export const H1 = ({ children }: React.PropsWithChildren<HeadingProps>) => {
    return (<Heading as={'h1'} style={Styles.h1Styles}>{children}</Heading>);
};
export const H2 = ({ children }: React.PropsWithChildren<HeadingProps>) => {
    return (<Heading as={'h2'} style={Styles.h2Styles}>{children}</Heading>);
};
export const H3 = ({ children }: React.PropsWithChildren<HeadingProps>) => {
    return (<Heading as={'h3'} style={Styles.h3Styles}>{children}</Heading>);
};
export const H4 = ({ children }: React.PropsWithChildren<HeadingProps>) => {
    return (<Heading as={'h4'} style={Styles.h4Styles}>{children}</Heading>);
};
export const H5 = ({ children }: React.PropsWithChildren<HeadingProps>) => {
    return (<Heading as={'h5'} style={Styles.h5Styles}>{children}</Heading>);
};
export const PageDiv = ({ children }: React.PropsWithChildren<FlexProps>) => {
    return (<Flex flexDirection='column' maxW='60%' p={5}>{children}</Flex>);
};
export const P = ({ children }: React.PropsWithChildren<any>) => {
    return (<chakra.p style={Styles.pStyles}>{children}</chakra.p>);
};
export const Ul = ({ children }: React.PropsWithChildren<ListProps>) => {
    return (<UnorderedList style={Styles.ulStyles}>{children}</UnorderedList>);
};
export const Ol = ({ children }: React.PropsWithChildren<ListProps>) => {
    return (<OrderedList style={Styles.ulStyles}>{children}</OrderedList>);
};
export const Li = ({ children }: React.PropsWithChildren<React.LiHTMLAttributes<string>>) => {
    return (<li style={Styles.ulStyles}>{children}</li>);
};
export const Table = ({ children }: React.PropsWithChildren<React.TableHTMLAttributes<string>>) => {
    return (<table style={Styles.tabelStyles}>{children}</table>);
};
export const Th = ({ children }: React.PropsWithChildren<React.ThHTMLAttributes<string>>) => {
    return (<th style={Styles.thStyles}>{children}</th>);
};
export const Tr = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (<tr>{children}</tr>);
};
export const Td = ({ children }: React.PropsWithChildren<React.TdHTMLAttributes<string>>) => {
    return (<td style={Styles.tdStyles}>{children}</td>);
};
export const Dl = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (<dl style={Styles.ulStyles}>{children}</dl>);
};
export const Dt = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (<dt style={Styles.ulStyles}><b>{children}</b></dt>);
};
export const Dd = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (<dd style={Styles.ulStyles}>{children}</dd>);
};
export const A = ({ href, children }: React.PropsWithChildren<React.AnchorHTMLAttributes<string>>) => {
    return (<a href={href}>{children}</a>);
};