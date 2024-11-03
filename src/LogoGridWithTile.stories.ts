import { Meta, StoryObj } from "@storybook/react";
import { LogoGridWithTile } from "./LogoGridWithTile";

export default { component: LogoGridWithTile } as Meta;

type Story = StoryObj<typeof LogoGridWithTile>;

export const Default: Story = {
  args: {
    title: "These and other companies trust us",
    items: [
      {
        imageSource:
          "https://www.horizontal.com/Horizontal_files/Horizontal%20Large.png",
        href: "#",
      },
      {
        imageSource:
          "https://www.akseleran.co.id/blog/wp-content/uploads/2021/08/Symantec-Logo.png",
        href: "#",
      },
      {
        imageSource:
          "https://blog.payrollbozz.com/wp-content/uploads/sites/28/2017/05/Tips-membuat-logo-perusahaan-1024x663.jpg",
        href: "#",
      },
      {
        imageSource:
          "https://download.logo.wine/logo/The_Boring_Company/The_Boring_Company-Logo.wine.png",
        href: "#",
      },
      {
        imageSource:
          "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png",
        href: "#",
      },
      {
        imageSource:
          "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/indizone/2020/11/26/yBsNLOj/ford-ternyata-sempat-hampir-ganti-logo-perusahaannya-di-tahun-1966100.jpg",
        href: "#",
      },
      {
        imageSource: "https://bnetfit.id/img/brand/brand-1.png",
        href: "#",
      },
      {
        imageSource:
          "https://corporate.acehardware.co.id/files/uploads/newsevent/thumbnail/2024/Jun/25/667aa675122e0/480-2-480x340.jpg?token=76d2f7a9195a5cef1605b99482c3501e",
        href: "#",
      },
    ],
  },
};
