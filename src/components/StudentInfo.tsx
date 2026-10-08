import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function StudentInfo() {
  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger render={<Button size="sm" />}>
        Jirapradit Thanapanyasakun
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>Student information</DrawerDescription>
        </DrawerHeader>
        <div className="min-h-0 flex-1 overflow-y-auto p-4">
          <Card className="overflow-hidden pt-0">
            <img
              src="/student-profile.jpg"
              alt="Jirapradit Thanapanyasakun"
              className="aspect-square w-full object-cover"
            />
            <CardContent className="space-y-3">
              <div>
                <h2 className="font-semibold">Jirapradit Thanapanyasakun</h2>
                <p className="text-sm text-muted-foreground">
                  Computer Engineering student at Chiang Mai University
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <p><Badge>Hobbies</Badge> Coding, music, and traveling</p>
                <p><Badge>Email</Badge> jiraphat_ti@cmu.ac.th</p>
                <p><Badge>Social</Badge> IG:paopei.pa</p>
              </div>
            </CardContent>
            <CardFooter className="border-t text-sm">
              รหัสนักศึกษา: 680610661
            </CardFooter>
          </Card>
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
