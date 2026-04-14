import { createBrowserRouter } from "react-router";
import { Welcome } from "./components/Welcome";
import { WashMenu } from "./components/WashMenu";
import { Upgrade } from "./components/Upgrade";
import { Upsell } from "./components/Upsell";
import { ContactInfo } from "./components/ContactInfo";
import { MembershipTerms } from "./components/MembershipTerms";
import { Payment } from "./components/Payment";
import { PullForward } from "./components/PullForward";
import { MemberWelcome } from "./components/MemberWelcome";
import { DigitalSign } from "./components/DigitalSign";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Welcome,
  },
  {
    path: "/menu",
    Component: WashMenu,
  },
  {
    path: "/upgrade",
    Component: Upgrade,
  },
  {
    path: "/upsell",
    Component: Upsell,
  },
  {
    path: "/contact",
    Component: ContactInfo,
  },
  {
    path: "/terms",
    Component: MembershipTerms,
  },
  {
    path: "/payment",
    Component: Payment,
  },
  {
    path: "/pull-forward",
    Component: PullForward,
  },
  {
    path: "/member-welcome",
    Component: MemberWelcome,
  },
  {
    path: "/digital-sign",
    Component: DigitalSign,
  },
]);
