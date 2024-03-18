import { Button } from "@/components/ui/button"

const ButtonsPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-x-[200px]">
      <Button >Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary Outline</Button>
      <Button variant="secondary">Primary</Button>
      <Button variant="secondaryOutline">Primary Outline</Button>
      <Button variant="danger">Primary</Button>
      <Button variant="dangerOutline">Primary Outline</Button>
      <Button variant="super">Primary</Button>
      <Button variant="superOutline">Primary Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="sidebar">sidebar</Button>
      <Button variant="sidebarOutline">side Outline</Button>
    </div>
  )
}

export default ButtonsPage