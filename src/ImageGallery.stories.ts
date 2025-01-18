import { StoryObj } from "@storybook/react";
import { ImageGallery } from "./ImageGallery";

export default {
  component: ImageGallery,
};

type Story = StoryObj<typeof ImageGallery>;

export const Default: Story = {
  args: {
    imageSources: [
      "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://petapixel.com/assets/uploads/2022/12/what-is-unsplash-800x420.jpg",
      "https://pressbooks.cuny.edu/app/uploads/sites/93/2022/08/thanuj-mathew-8CSTVoDMEXg-unsplash-scaled.jpg",
      "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://plus.unsplash.com/premium_photo-1690482772122-b745b7a4343b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHR8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1667126444822-94fb21279436?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwaGR8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1669137759430-3a04cd1a7cd0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1676320125952-85ced2f39d7f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hemluZ3xlbnwwfHwwfHx8MA%3D%3D",
    ],
    maxColumn: 5,
    title: "Cafe Vibes",
    subtitle: "Chill in the enjoyable cafe vibes",
    align: "center",
  },
};
