import StreamVideoProvider from "@/components/providers/stream-client-provider";

function Layout({ children }: { children: React.ReactNode }) {
  return <StreamVideoProvider>{children}</StreamVideoProvider>;
}

export default Layout;
