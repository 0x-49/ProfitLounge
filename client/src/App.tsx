import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";

// SEO Meta Tags
const MetaTags = () => (
  <>
    <meta name="description" content="Join the #1 exclusive reselling community. Access daily deals, price errors, and money-making opportunities with cutting-edge technology and expert staff." />
    <meta name="keywords" content="reselling, price errors, deals, profit, Home Depot deals, Lowes deals, reseller community" />
    <meta property="og:title" content="Profit Lounge - #1 Exclusive Reselling Community" />
    <meta property="og:description" content="Access exclusive deals, price errors, and money-making opportunities with our cutting-edge technology and 50+ expert staff." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://profitlounge.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Profit Lounge - #1 Exclusive Reselling Community" />
    <meta name="twitter:description" content="Join 10,000+ successful resellers. Access exclusive deals and price errors today!" />
    <link rel="canonical" href="https://profitlounge.com" />
  </>
);

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MetaTags />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;