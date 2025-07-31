import React from "react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

interface LiveCodeProps extends React.ComponentProps<"code"> {
  "data-live"?: string
}

export const LiveCode = ({
  children,
  ...props
}: LiveCodeProps) => {

  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">
          Preview
        </TabsTrigger>
        <TabsTrigger value="code">
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div>
          Preview
        </div>
      </TabsContent>
      <TabsContent value="code">
        <div>
          Code
        </div>
      </TabsContent>
    </Tabs>
  )
}
