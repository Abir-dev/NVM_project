import {
  CalendarIcon,
  ChevronDownIcon,
  MoreVerticalIcon,
  PlusIcon,
  Share2Icon,
  TrendingDownIcon,
  TrendingUpIcon,
  UserXIcon,
} from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

const metricsData = [
  {
    icon: "/icon-8.svg",
    title: "Bookings",
    value: "240",
    change: "+9.97%",
    changeType: "up",
    subtitle: "vs last month",
    gradient: true,
  },
  {
    icon: "/icon-4.svg",
    title: "Revenue",
    value: "$842,450",
    change: "+9.97%",
    changeType: "up",
    subtitle: "vs last month",
    gradient: false,
  },
  {
    icon: "/icon-9.svg",
    title: "Avg Booking Value",
    value: "$1,254",
    change: "-3.51%",
    changeType: "down",
    subtitle: "vs last month",
    gradient: false,
  },
  {
    icon: "/icon.svg",
    title: "No Show Rate",
    value: "5%",
    change: "+9.97%",
    changeType: "up",
    subtitle: "vs last month",
    gradient: false,
  },
];

const yAxisLabels = ["35", "30", "25", "20", "15", "10", "5", "0"];
const xAxisLabels = [
  "Dec 01",
  "Dec 02",
  "Dec 03",
  "Dec 04",
  "Dec 05",
  "Dec 06",
  "Dec 07",
];

const topArtistsBarData = [
  { name: "Clara Jensen", value: 5 },
  { name: "Sophie Langley", value: 45 },
  { name: "Ethan", value: 9 },
  { name: "Luca Moretti", value: 20 },
  { name: "Ayra Voss", value: 17 },
];

const topArtistsPieData = [
  { name: "Sophie Langley", value: 45 },
  { name: "Luca Moretti", value: 20 },
  { name: "Ayra Voss", value: 17 },
  { name: "Ethan", value: 9 },
  { name: "Clara Jensen", value: 5 },
];

const newBookingsFeedData = [
  {
    artistAvatar: "/avatar-luca-10.png",
    artistName: "Ayra Voss",
    clientName: "Martin Torff",
    bookingType: "💬 Consultation",
    style: "realism",
    dateTime: "��� Tue, Aug 20, 2025\n⏰ 11:00 AM – 1:00 PM",
    status: "New",
    statusColor: "bg-[#f3f3f3] text-[#6b6b6b]",
  },
  {
    artistAvatar: "/avatar-luca-1.png",
    artistName: "Luca Moretti",
    clientName: "Cheyenne Lipshutz",
    bookingType: "✒ Tattoo Session",
    style: "Blackwork",
    dateTime: "📅 Tue, Aug 20, 2025\n⏰ 3:00 PM – 4:00 PM",
    status: "Deposit Requested",
    statusColor: "bg-[#f5ffde] text-[#966b00]",
  },
  {
    artistAvatar: "/avatar-luca-2.png",
    artistName: "Ethan",
    clientName: "Davis",
    bookingType: "✨ Flash",
    style: "realism",
    dateTime: "📅 Wed, Aug 21, 2025\n⏰ 2:30 PM – 2:30 PM",
    status: "Deposit Paid",
    statusColor: "bg-[#f1fcf5] text-[#2cc974]",
  },
  {
    artistAvatar: "/avatar-luca-3.png",
    artistName: "Sophie Langley",
    clientName: "Haylie Bator",
    bookingType: "✒ Tattoo Session",
    style: "Fine Line",
    dateTime: "📅 Thu, Aug 22, 2025\n⏰ 10:00 AM – 11:30 AM",
    status: "Scheduled",
    statusColor: "bg-indigo-100 text-indigo-500",
  },
  {
    artistAvatar: "/avatar-luca-4.png",
    artistName: "Clara Jensen",
    clientName: "Maren Levin",
    bookingType: "💬 Consultation",
    style: "Tribal",
    dateTime: "📅 Fri, Aug 23, 2025\n⏰ 2:00 PM – 5:00 PM",
    status: "Upcoming",
    statusColor: "bg-violet-100 text-violet-500",
  },
];

const upcomingAppointmentsData = [
  {
    icon: "💬",
    title: "Consultation with Martin Torff",
    time: "10:00 - 11:00 AM",
  },
  {
    icon: "/icon-3.svg",
    title: "Tattoo Session with Haylie",
    time: "10:00 - 11:00 AM",
  },
  {
    icon: "💬",
    title: "Consultation with Davis",
    time: "10:00 - 11:00 AM",
  },
];

const inventoryData = [
  {
    artistAvatar: "/avatar-luca-10.png",
    artistName: "Ayra Voss",
    item: "Dynamic Black 8oz Ink",
    quantity: "12",
    threshold: "10",
    vendor: "Ink Supply Co",
    lastUsed: "2025-09-09",
    status: "! Low",
    statusColor: "bg-[#f3f3f3] text-[#6b6b6b] border-[#6b6b6b]",
  },
  {
    artistAvatar: "/avatar-luca-6.png",
    artistName: "Sophie Langley",
    item: "7RL Needles (Box of 50)",
    quantity: "200",
    threshold: "20",
    vendor: "Ink Supply Co",
    lastUsed: "2025-09-09",
    status: "Okay",
    statusColor: "bg-[#f5ffde] text-[#35b97e] border-[#35b97e]",
  },
  {
    artistAvatar: "/avatar-luca-10.png",
    artistName: "Ayra Voss",
    item: "Green Soap (1L)",
    quantity: "14",
    threshold: "5",
    vendor: "CleanTattoo",
    lastUsed: "2025-04-06",
    status: "⛔ Out",
    statusColor: "bg-[#fdecec] text-[#b93535] border-[#b93535]",
  },
  {
    artistAvatar: "/avatar-luca-10.png",
    artistName: "Ayra Voss",
    item: "Stencil Transfer Paper (Sheets)",
    quantity: "1002",
    threshold: "100",
    vendor: "Stencil Champs",
    lastUsed: "2025-04-06",
    status: "Good",
    statusColor: "bg-[#f5ffde] text-[#35b97e] border-[#35b97e]",
  },
  {
    artistAvatar: "/avatar-luca-10.png",
    artistName: "Ayra Voss",
    item: "Nitrile Gloves (Box of 100)",
    quantity: "40",
    threshold: "10",
    vendor: "SafeHands",
    lastUsed: "2025-02-11",
    status: "Good",
    statusColor: "bg-[#f5ffde] text-[#35b97e] border-[#35b97e]",
  },
  {
    artistAvatar: "/avatar-luca-10.png",
    artistName: "Ayra Voss",
    item: "Eternal White Ink 2oz",
    quantity: "32",
    threshold: "10",
    vendor: "Ink Supply Co",
    lastUsed: "2025-02-11",
    status: "Good",
    statusColor: "bg-[#f5ffde] text-[#35b97e] border-[#35b97e]",
  },
  {
    artistAvatar: "/avatar-luca-11.png",
    artistName: "Luca Moretti",
    item: "Cavicide Disinfectant (1L)",
    quantity: "120034",
    threshold: "100",
    vendor: "28 Years",
    lastUsed: "2025-02-11",
    status: "Good",
    statusColor: "bg-[#f5ffde] text-[#35b97e] border-[#35b97e]",
  },
  {
    artistAvatar: "/avatar-luca-12.png",
    artistName: "Ethan",
    item: "Cavicide Disinfectant (1L)",
    quantity: "120034",
    threshold: "100",
    vendor: "28 Years",
    lastUsed: "2025-02-11",
    status: "Good",
    statusColor: "bg-[#f5ffde] text-[#35b97e] border-[#35b97e]",
  },
  {
    artistAvatar: "/avatar-luca-13.png",
    artistName: "Clara Jensen",
    item: "Cavicide Disinfectant (1L)",
    quantity: "120034",
    threshold: "100",
    vendor: "28 Years",
    lastUsed: "2025-02-11",
    status: "Out",
    statusColor: "bg-[#fdecec] text-[#b93535] border-[#b93535]",
  },
];

export const DashboardContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-6 p-5 flex-1 self-stretch w-full bg-[#f7f7f7] rounded-[20px_0px_0px_0px] overflow-x-hidden">
      <header className="flex items-center justify-between self-stretch w-full">
        <div className="inline-flex flex-col items-start gap-2">
          <h1 className="mt-[-1.00px] text-[length:var(--heading-h2-semibold-font-size)] leading-[var(--heading-h2-semibold-line-height)] font-heading-h2-semibold font-[number:var(--heading-h2-semibold-font-weight)] text-[#121212] tracking-[var(--heading-h2-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--heading-h2-semibold-font-style)]">
            Dashboard Overview
          </h1>
          <p className="font-text-text-3-medium font-[number:var(--text-text-3-medium-font-weight)] text-[#888888] text-[length:var(--text-text-3-medium-font-size)] tracking-[var(--text-text-3-medium-letter-spacing)] leading-[var(--text-text-3-medium-line-height)] whitespace-nowrap [font-style:var(--text-text-3-medium-font-style)]">
            Get a quick snapshot of your shop&apos;s performance — bookings,
            payments — all in one place.
          </p>
        </div>

        <div className="inline-flex items-center gap-3">
          <Button
            variant="outline"
            className="h-11 gap-2 px-3 py-2 bg-white rounded-xl border-0"
          >
            <PlusIcon className="w-5 h-5" />
            <span className="font-button-button-medium font-[number:var(--button-button-medium-font-weight)] text-[#121212] text-[length:var(--button-button-medium-font-size)] tracking-[var(--button-button-medium-letter-spacing)] leading-[var(--button-button-medium-line-height)] [font-style:var(--button-button-medium-font-style)]">
              Invite Staff
            </span>
          </Button>

          <Button
            variant="outline"
            className="h-11 gap-2 px-3 py-2 bg-white rounded-xl border-0"
          >
            <Share2Icon className="w-5 h-5" />
            <span className="font-button-button-medium font-[number:var(--button-button-medium-font-weight)] text-[#121212] text-[length:var(--button-button-medium-font-size)] tracking-[var(--button-button-medium-letter-spacing)] leading-[var(--button-button-medium-line-height)] [font-style:var(--button-button-medium-font-style)]">
              Booking Link
            </span>
          </Button>

          <Button
            variant="outline"
            className="h-11 gap-2 px-3 py-2 bg-white rounded-xl border-0"
          >
            <UserXIcon className="w-6 h-6" />
            <span className="font-button-button-medium font-[number:var(--button-button-medium-font-weight)] text-[#121212] text-[length:var(--button-button-medium-font-size)] tracking-[var(--button-button-medium-letter-spacing)] leading-[var(--button-button-medium-line-height)] [font-style:var(--button-button-medium-font-style)]">
              View All Requests
            </span>
          </Button>

          <Button className="h-11 gap-2 px-3 py-2 bg-[#f46425] rounded-xl hover:bg-[#f46425]/90">
            <PlusIcon className="w-6 h-6" />
            <span className="font-button-button-medium font-[number:var(--button-button-medium-font-weight)] text-white text-[length:var(--button-button-medium-font-size)] tracking-[var(--button-button-medium-letter-spacing)] leading-[var(--button-button-medium-line-height)] [font-style:var(--button-button-medium-font-style)]">
              New Booking
            </span>
          </Button>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row items-start gap-5 flex-1 self-stretch w-full">
        <div className="flex flex-col items-start gap-5 w-full lg:max-w-[644px] min-w-0">
          <div className="flex flex-col w-full items-start gap-5">
            <div className="flex flex-col sm:flex-row items-center gap-5 self-stretch w-full">
              {metricsData.slice(0, 2).map((metric, index) => (
                <Card
                  key={index}
                  className={`flex flex-col w-full sm:flex-1 sm:min-w-0 sm:max-w-[312px] items-start gap-4 p-4 rounded-2xl overflow-hidden border-0 ${
                    metric.gradient
                      ? "shadow-[0px_12px_20px_#f4642566] bg-[linear-gradient(223deg,rgba(244,100,37,1)_17%,rgba(245,180,11,1)_100%)]"
                      : "bg-white"
                  }`}
                >
                  <CardContent className="p-0 w-full space-y-4">
                    <div className="inline-flex items-center gap-3">
                      <img className="w-10 h-10" alt="Icon" src={metric.icon} />
                      <h3
                        className={`font-heading-h6-semibold font-[number:var(--heading-h6-semibold-font-weight)] text-[length:var(--heading-h6-semibold-font-size)] tracking-[var(--heading-h6-semibold-letter-spacing)] leading-[var(--heading-h6-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-h6-semibold-font-style)] ${
                          metric.gradient
                            ? "bg-[linear-gradient(178deg,rgba(255,255,255,1)_0%,rgba(229,229,229,1)_76%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]"
                            : "text-[#121212]"
                        }`}
                      >
                        {metric.title}
                      </h3>
                    </div>

                    <div
                      className={`font-[number:var(--heading-h2-${metric.gradient ? "bold" : "semibold"}-font-weight)] self-stretch font-heading-h2-${metric.gradient ? "bold" : "semibold"} text-[length:var(--heading-h2-${metric.gradient ? "bold" : "semibold"}-font-size)] tracking-[var(--heading-h2-${metric.gradient ? "bold" : "semibold"}-letter-spacing)] leading-[var(--heading-h2-${metric.gradient ? "bold" : "semibold"}-line-height)] [font-style:var(--heading-h2-${metric.gradient ? "bold" : "semibold"}-font-style)] ${
                        metric.gradient
                          ? "bg-[linear-gradient(178deg,rgba(255,255,255,1)_0%,rgba(229,229,229,1)_76%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]"
                          : "text-[#121212]"
                      }`}
                    >
                      {metric.value}
                    </div>

                    <div className="inline-flex items-center justify-center gap-2">
                      <Badge
                        className={`inline-flex items-center gap-1 px-1 py-0.5 rounded-[999px] ${
                          metric.gradient
                            ? "bg-[linear-gradient(178deg,rgba(255,255,255,1)_0%,rgba(229,229,229,1)_76%)]"
                            : metric.changeType === "up"
                              ? "bg-[#f1fcf5]"
                              : "bg-red-50"
                        }`}
                      >
                        {metric.changeType === "up" ? (
                          <TrendingUpIcon className="w-4 h-4" />
                        ) : (
                          <TrendingDownIcon className="w-4 h-4" />
                        )}
                        <span
                          className={`mt-[-1.00px] font-text-text-5-medium font-[number:var(--text-text-5-medium-font-weight)] text-[length:var(--text-text-5-medium-font-size)] tracking-[var(--text-text-5-medium-letter-spacing)] leading-[var(--text-text-5-medium-line-height)] whitespace-nowrap [font-style:var(--text-text-5-medium-font-style)] ${
                            metric.gradient
                              ? "text-[#f46425]"
                              : metric.changeType === "up"
                                ? "text-[#2cc974]"
                                : "text-red-500"
                          }`}
                        >
                          {metric.change}
                        </span>
                      </Badge>
                      <span
                        className={`mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-sm tracking-[-0.14px] leading-[21px] whitespace-nowrap ${
                          metric.gradient
                            ? "bg-[linear-gradient(178deg,rgba(255,255,255,1)_0%,rgba(229,229,229,1)_76%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]"
                            : "text-[#888888]"
                        }`}
                      >
                        {metric.subtitle}
                      </span>
                    </div>
                  </CardContent>
                  {metric.gradient && (
                    <img
                      className="absolute top-[calc(50.00%_-_117px)] -right-10 w-[104px] h-[93px]"
                      alt="Vector"
                      src="/vector.svg"
                    />
                  )}
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-5 self-stretch w-full">
              {metricsData.slice(2, 4).map((metric, index) => (
                <Card
                  key={index}
                  className="flex flex-col w-full sm:flex-1 sm:min-w-0 sm:max-w-[312px] items-start gap-4 p-4 bg-white rounded-2xl overflow-hidden border-0"
                >
                  <CardContent className="p-0 w-full space-y-4">
                    <div className="inline-flex items-center gap-3">
                      <img className="w-10 h-10" alt="Icon" src={metric.icon} />
                      <h3 className="font-heading-h6-semibold font-[number:var(--heading-h6-semibold-font-weight)] text-[#121212] text-[length:var(--heading-h6-semibold-font-size)] tracking-[var(--heading-h6-semibold-letter-spacing)] leading-[var(--heading-h6-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-h6-semibold-font-style)]">
                        {metric.title}
                      </h3>
                    </div>

                    <div className="font-[number:var(--heading-h2-semibold-font-weight)] text-[#121212] self-stretch font-heading-h2-semibold text-[length:var(--heading-h2-semibold-font-size)] tracking-[var(--heading-h2-semibold-letter-spacing)] leading-[var(--heading-h2-semibold-line-height)] [font-style:var(--heading-h2-semibold-font-style)]">
                      {metric.value}
                    </div>

                    <div className="inline-flex items-center justify-center gap-2">
                      <Badge
                        className={`inline-flex items-center gap-1 px-1 py-0.5 rounded-[999px] ${
                          metric.changeType === "up"
                            ? "bg-[#f1fcf5]"
                            : "bg-red-50"
                        }`}
                      >
                        {metric.changeType === "up" ? (
                          <TrendingUpIcon className="w-4 h-4" />
                        ) : (
                          <TrendingDownIcon className="w-4 h-4" />
                        )}
                        <span
                          className={`mt-[-1.00px] font-text-text-5-medium font-[number:var(--text-text-5-medium-font-weight)] text-[length:var(--text-text-5-medium-font-size)] tracking-[var(--text-text-5-medium-letter-spacing)] leading-[var(--text-text-5-medium-line-height)] whitespace-nowrap [font-style:var(--text-text-5-medium-font-style)] ${
                            metric.changeType === "up"
                              ? "text-[#2cc974]"
                              : "text-red-500"
                          }`}
                        >
                          {metric.change}
                        </span>
                      </Badge>
                      <span className="mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-[#888888] text-sm tracking-[-0.14px] leading-[21px] whitespace-nowrap">
                        {metric.subtitle}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="flex flex-col w-full h-[413px] items-start gap-5 p-5 bg-white rounded-[20px] border-0">
            <CardContent className="p-0 w-full space-y-5">
              <div className="flex items-center justify-between self-stretch w-full">
                <h3 className="text-[length:var(--heading-h6-semibold-font-size)] leading-[var(--heading-h6-semibold-line-height)] font-heading-h6-semibold font-[number:var(--heading-h6-semibold-font-weight)] text-[#121212] tracking-[var(--heading-h6-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--heading-h6-semibold-font-style)]">
                  Booking Insights
                </h3>

                <Select defaultValue="december">
                  <SelectTrigger className="h-9 gap-2 px-3 py-2 bg-white rounded-xl border border-solid border-[#e7e7e7] w-auto">
                    <SelectValue>
                      <span className="font-button-button-small font-[number:var(--button-button-small-font-weight)] text-[#121212] text-[length:var(--button-button-small-font-size)] tracking-[var(--button-button-small-letter-spacing)] leading-[var(--button-button-small-line-height)] [font-style:var(--button-button-small-font-style)]">
                        December
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="december">December</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="relative self-stretch w-full h-[329px] mb-[-12.00px]">
                <div className="flex-col w-8 h-[292px] items-start top-0 left-0 flex justify-between absolute">
                  {yAxisLabels.map((label, index) => (
                    <div
                      key={index}
                      className={`self-stretch ${index === 0 ? "mt-[-1.00px]" : ""} font-[number:var(--text-text-5-medium-font-weight)] text-[#121212] font-text-text-5-medium text-[length:var(--text-text-5-medium-font-size)] tracking-[var(--text-text-5-medium-letter-spacing)] leading-[var(--text-text-5-medium-line-height)] [font-style:var(--text-text-5-medium-font-style)]`}
                    >
                      {label}
                    </div>
                  ))}
                </div>

                <div className="w-full max-w-[556px] items-center left-3 md:left-12 bottom-3 flex justify-between absolute">
                  {xAxisLabels.map((label, index) => (
                    <div
                      key={index}
                      className="flex-1 mt-[-1.00px] font-text-text-5-medium font-[number:var(--text-text-5-medium-font-weight)] text-[#121212] text-[length:var(--text-text-5-medium-font-size)] text-center tracking-[var(--text-text-5-medium-letter-spacing)] leading-[var(--text-text-5-medium-line-height)] [font-style:var(--text-text-5-medium-font-style)]"
                    >
                      {label}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col w-full max-w-[560px] h-[286px] items-start justify-between absolute top-0 left-6 md:left-11">
                  {[...Array(8)].map((_, index) => (
                    <img
                      key={index}
                      className={`relative self-stretch w-full h-px ml-[-0.50px] object-cover ${
                        index === 7 ? "mb-[-0.50px]" : ""
                      }`}
                      alt="Divider"
                      src="/divider-1.svg"
                    />
                  ))}

                  <div className="absolute top-px left-6 md:left-[30px] w-full max-w-[499px] h-[285px]">
                    <img
                      className="absolute top-[99px] -left-0.5 w-full max-w-[502px] h-[147px]"
                      alt="Line chart"
                      src="/line-chart.svg"
                    />

                    <div className="absolute top-0 left-[130px] w-[108px] h-[285px] md:left-[130px] lg:left-[130px] sm:left-[80px]">
                      <img
                        className="absolute -top-px left-[7px] w-0.5 h-[287px]"
                        alt="Line"
                        src="/line.svg"
                      />

                      <div className="absolute w-[14.81%] h-[5.50%] top-[13.74%] left-0 bg-white rounded-[8px/7.84px] border-[2.94px] border-solid border-[#f46425]" />

                      <div className="inline-flex items-center px-2 py-1 absolute top-[calc(50.00%_-_116px)] left-[calc(50.00%_-_25px)] bg-[#121212] rounded-md shadow-[0px_4px_4px_#acacac26]">
                        <img
                          className="absolute top-[calc(50.00%_-_8px
)] left-[-9px] w-2.5 h-4"
                          alt="Polygon"
                          src="/polygon--1.svg"
                        />

                        <div className="inline-flex flex-col items-start">
                          <div className="self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal text-white text-[10px] tracking-[0] leading-[14px]">
                            Appointments
                          </div>

                          <div className="self-stretch font-[number:var(--text-text-5-semibold-font-weight)] text-white text-center font-text-text-5-semibold text-[length:var(--text-text-5-semibold-font-size)] tracking-[var(--text-text-5-semibold-letter-spacing)] leading-[var(--text-text-5-semibold-line-height)] [font-style:var(--text-text-5-semibold-font-style)]">
                            17
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col w-full items-start gap-5 p-5 bg-white rounded-[20px] border-0">
            <CardContent className="p-0 w-full space-y-5">
              <div className="flex items-center justify-between self-stretch w-full">
                <h3 className="font-heading-h6-semibold font-[number:var(--heading-h6-semibold-font-weight)] text-[#121212] text-[length:var(--heading-h6-semibold-font-size)] tracking-[var(--heading-h6-semibold-letter-spacing)] leading-[var(--heading-h6-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-h6-semibold-font-style)]">
                  Top Artists
                </h3>

                <Select defaultValue="december">
                  <SelectTrigger className="h-9 gap-2 px-3 py-2 bg-white rounded-xl border border-solid border-[#e7e7e7] w-auto">
                    <SelectValue>
                      <span className="font-button-button-small font-[number:var(--button-button-small-font-weight)] text-[#121212] text-[length:var(--button-button-small-font-size)] tracking-[var(--button-button-small-letter-spacing)] leading-[var(--button-button-small-line-height)] [font-style:var(--button-button-small-font-style)]">
                        December
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="december">December</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-center gap-5 self-stretch w-full">
                <div className="relative flex-1 h-[261px]">
                  <div className="flex flex-col w-7 h-[232px] items-start justify-between absolute left-0 bottom-[27px]">
                    {["50", "40", "30", "20", "10", "0"].map((label, index) => (
                      <div
                        key={index}
                        className={`self-stretch ${index === 0 ? "mt-[-1.00px]" : ""} font-[number:var(--text-text-5-medium-font-weight)] text-[#121212] font-text-text-5-medium text-[length:var(--text-text-5-medium-font-size)] tracking-[var(--text-text-5-medium-letter-spacing)] leading-[var(--text-text-5-medium-line-height)] [font-style:var(--text-text-5-medium-font-style)]`}
                      >
                        {label}
                      </div>
                    ))}
                  </div>

                    <div className="flex w-full max-w-[576px] items-center justify-between absolute left-7 bottom-0">
                    {topArtistsBarData.map((artist, index) => (
                      <div
                        key={index}
                        className={`${index === 2 ? "w-[61px]" : index === 4 ? "w-[61px]" : "w-fit"} mt-[-1.00px] text-[length:var(--text-text-5-medium-font-size)] text-center leading-[var(--text-text-5-medium-line-height)] ${index === 2 || index === 4 ? "" : "whitespace-nowrap"} font-text-text-5-medium font-[number:var(--text-text-5-medium-font-weight)] text-[#121212] tracking-[var(--text-text-5-medium-letter-spacing)] [font-style:var(--text-text-5-medium-font-style)]`}
                      >
                        {artist.name}
                      </div>
                    ))}
                  </div>

                  <img
                    className="absolute top-2.5 left-12 w-full max-w-[556px] h-[225px]"
                    alt="Divider"
                    src="/divider.png"
                  />

                  <div className="absolute top-2.5 left-[45px] w-full max-w-[548px] h-[220px] flex items-end md:left-[45px] sm:left-[25px]">
                    <div className="w-11 h-[164px] bg-[#fff5ed] rounded-[999px]" />
                    <div className="h-[220px] ml-[90px] bg-[#fff5ed] w-11 rounded-[999px]" />
                    <div className="h-[140px] ml-[82px] bg-[linear-gradient(223deg,rgba(255,92,0,1)_17%,rgba(245,180,11,1)_100%)] w-11 rounded-[999px]" />
                    <div className="h-[148px] ml-[79px] bg-[#fff5ed] w-11 rounded-[999px]" />
                    <div className="h-[172px] ml-[77px] bg-[#fff5ed] w-11 rounded-[999px]" />
                  </div>

                  <div className="inline-flex items-center px-2 py-1 absolute top-[calc(50.00%_-_88px)] left-[calc(50.00%_-_14px)] bg-[#121212] rounded-md shadow-[0px_4px_4px_#acacac26]">
                    <img
                      className="absolute left-[calc(50.00%_-_10px)] -bottom-2 w-4 h-[11px]"
                      alt="Polygon"
                      src="/polygon-.svg"
                    />

                    <div className="inline-flex flex-col items-start">
                      <div className="text-center self-stretch mt-[-1.00px] font-text-text-6-reguler font-[number:var(--text-text-6-reguler-font-weight)] text-white text-[length:var(--text-text-6-reguler-font-size)] tracking-[var(--text-text-6-reguler-letter-spacing)] leading-[var(--text-text-6-reguler-line-height)] [font-style:var(--text-text-6-reguler-font-style)]">
                        Appointments
                      </div>

                      <div className="self-stretch font-[number:var(--text-text-5-semibold-font-weight)] text-white text-center font-text-text-5-semibold text-[length:var(--text-text-5-semibold-font-size)] tracking-[var(--text-text-5-semibold-letter-spacing)] leading-[var(--text-text-5-semibold-line-height)] [font-style:var(--text-text-5-semibold-font-style)]">
                        25
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col w-full items-start gap-5 p-5 bg-white rounded-[20px] border-0">
            <CardContent className="p-0 w-full space-y-5">
              <div className="flex items-center justify-between self-stretch w-full">
                <h3 className="font-heading-h6-semibold font-[number:var(--heading-h6-semibold-font-weight)] text-[#121212] text-[length:var(--heading-h6-semibold-font-size)] tracking-[var(--heading-h6-semibold-letter-spacing)] leading-[var(--heading-h6-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-h6-semibold-font-style)]">
                  Top Artists
                </h3>

                <Select defaultValue="december">
                  <SelectTrigger className="h-9 gap-2 px-3 py-2 bg-white rounded-xl border border-solid border-[#e7e7e7] w-auto">
                    <SelectValue>
                      <span className="font-button-button-small font-[number:var(--button-button-small-font-weight)] text-[#121212] text-[length:var(--button-button-small-font-size)] tracking-[var(--button-button-small-letter-spacing)] leading-[var(--button-button-small-line-height)] [font-style:var(--button-button-small-font-style)]">
                        December
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="december">December</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col items-center gap-5 self-stretch w-full">
                <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                    <defs>
                      <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff5c00" />
                        <stop offset="100%" stopColor="#ffb366" />
                      </linearGradient>
                    </defs>
                    {(() => {
                      const total = topArtistsPieData.reduce((sum, item) => sum + item.value, 0);
                      const maxValue = Math.max(...topArtistsPieData.map(a => a.value));
                      let cumulativePercent = 0;

                      return topArtistsPieData.map((artist, index) => {
                        const percentage = (artist.value / total) * 100;
                        const startAngle = (cumulativePercent / 100) * 360;
                        const endAngle = ((cumulativePercent + percentage) / 100) * 360;
                        cumulativePercent += percentage;

                        const startRad = (startAngle * Math.PI) / 180;
                        const endRad = (endAngle * Math.PI) / 180;
                        const radius = 75;

                        const x1 = 100 + radius * Math.cos(startRad);
                        const y1 = 100 + radius * Math.sin(startRad);
                        const x2 = 100 + radius * Math.cos(endRad);
                        const y2 = 100 + radius * Math.sin(endRad);

                        const largeArc = percentage > 50 ? 1 : 0;

                        const pathData = [
                          `M 100 100`,
                          `L ${x1} ${y1}`,
                          `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
                          "Z"
                        ].join(" ");

                        const isMax = artist.value === maxValue;
                        const fillColor = isMax ? "url(#orangeGradient)" : "#f5ede3";

                        return (
                          <path
                            key={index}
                            d={pathData}
                            fill={fillColor}
                            stroke="#ffd4b3"
                            strokeWidth="1"
                          />
                        );
                      });
                    })()}
                  </svg>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                  {topArtistsPieData.map((artist, index) => {
                    const colors = ["#ff5c00", "#ff7722", "#ff8833", "#ff9944", "#ffaa55"];
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-sm"
                          style={{ backgroundColor: colors[index % colors.length] }}
                        />
                        <span className="font-text-text-5-medium font-[number:var(--text-text-5-medium-font-weight)] text-[#121212] text-[length:var(--text-text-5-medium-font-size)] tracking-[var(--text-text-5-medium-letter-spacing)] leading-[var(--text-text-5-medium-line-height)] [font-style:var(--text-text-5-medium-font-style)]">
                          {artist.name} ({artist.value})
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col w-full lg:max-w-[644px] min-w-0 items-start gap-5 self-stretch">
          <Card className="flex flex-col h-[432px] items-start gap-5 p-5 self-stretch w-full bg-white rounded-[20px] overflow-hidden border-0">
            <CardContent className="p-0 w-full flex flex-col gap-5 flex-1">
              <div className="flex items-center justify-between self-stretch w-full">
                <h3 className="font-heading-h6-semibold font-[number:var(--heading-h6-semibold-font-weight)] text-[#121212] text-[length:var(--heading-h6-semibold-font-size)] tracking-[var(--heading-h6-semibold-letter-spacing)] leading-[var(--heading-h6-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-h6-semibold-font-style)]">
                  New Bookings Feed
                </h3>

                <Select defaultValue="all">
                  <SelectTrigger className="h-9 gap-2 px-3 py-2 bg-white rounded-xl border border-solid border-[#e7e7e7] w-auto">
                    <SelectValue>
                      <span className="font-button-button-small font-[number:var(--button-button-small-font-weight)] text-[#121212] text-[length:var(--button-button-small-font-size)] tracking-[var(--button-button-small-letter-spacing)] leading-[var(--button-button-small-line-height)] [font-style:var(--button-button-small-font-style)]">
                        All Status
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1 bg-white rounded-xl overflow-hidden border border-solid border-[#e7e7e7] flex self-stretch w-full">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#f7f7f7] hover:bg-[#f7f7f7]">
                      <TableHead className="h-12 p-3 font-text-text-4-semibold font-[number:var(--text-text-4-semibold-font-weight)] text-[#121212] text-[length:var(--text-text-4-semibold-font-size)] tracking-[var(--text-text-4-semibold-letter-spacing)] leading-[var(--text-text-4-semibold-line-height)] [font-style:var(--text-text-4-semibold-font-style)]">
                        Artist Name
                      </TableHead>
                      <TableHead className="h-12 p-3 font-text-text-4-semibold font-[number:var(--text-text-4-semibold-font-weight)] text-[#121212] text-[length:var(--text-text-4-semibold-font-size)] tracking-[var(--text-text-4-semibold-letter-spacing)] leading-[var(--text-text-4-semibold-line-height)] [font-style:var(--text-text-4-semibold-font-style)]">
                        Client Name
                      </TableHead>
                      <TableHead className="h-12 p-3 font-text-text-4-semibold font-[number:var(--text-text-4-semibold-font-weight)] text-[#121212] text-[length:var(--text-text-4-semibold-font-size)] tracking-[var(--text-text-4-semibold-letter-spacing)] leading-[var(--text-text-4-semibold-line-height)] [font-style:var(--text-text-4-semibold-font-style)]">
                        Booking Type
                      </TableHead>
                      <TableHead className="h-12 p-3 font-text-text-4-semibold font-[number:var(--text-text-4-semibold-font-weight)] text-[#121212] text-[length:var(--text-text-4-semibold-font-size)] tracking-[var(--text-text-4-semibold-letter-spacing)] leading-[var(--text-text-4-semibold-line-height)] [font-style:var(--text-text-4-semibold-font-style)]">
                        Style
                      </TableHead>
                      <TableHead className="h-12 p-3 font-text-text-4-semibold font-[number:var(--text-text-4-semibold-font-weight)] text-[#121212] text-[length:var(--text-text-4-semibold-font-size)] tracking-[var(--text-text-4-semibold-letter-spacing)] leading-[var(--text-text-4-semibold-line-height)] [font-style:var(--text-text-4-semibold-font-style)]">
                        Date &amp; Time
                      </TableHead>
                      <TableHead className="h-12 p-3 font-text-text-4-semibold font-[number:var(--text-text-4-semibold-font-weight)] text-[#121212] text-[length:var(--text-text-4-semibold-font-size)] tracking-[var(--text-text-4-semibold-letter-spacing)] leading-[var(--text-text-4-semibold-line-height)] [font-style:var(--text-text-4-semibold-font-style)]">
                        Status
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {newBookingsFeedData.map((booking, index) => (
                      <TableRow
                        key={index}
                        className={
                          index === 3 ? "bg-[#f7f7f7] hover:bg-[#f7f7f7]" : ""
                        }
                      >
                        <TableCell className="p-3">
                          <div className="flex items-center gap-2">
                            <Avatar className="w-[26px] h-[26px] rounded-[74.5px] border border-solid border-[#dbdbdb]">
                              <AvatarImage src={booking.artistAvatar} />
                              <AvatarFallback>
                                {booking.artistName[0]}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-text-text-5-medium font-[number:var(--text-text-5-medium-font-weight)] text-[#121212] text-[length:var(--text-text-5-medium-font-size)] tracking-[var(--text-text-5-medium-letter-spacing)] leading-[var(--text-text-5-medium-line-height)] [font-style:var(--text-text-5-medium-font-style)]">
                              {booking.artistName}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="p-3">
                          <span className="font-text-text-5-medium font-[number:var(--text-text-5-medium-font-weight)] text-[#121212] text-[length:var(--text-text-5-medium-font-size)] tracking-[var(--text-text-5-medium-letter-spacing)] leading-[var(--text-text-5-medium-line-height)] [font-style:var(--text-text-5-medium-font-style)]">
                            {booking.clientName}
                          </span>
                        </TableCell>
                        <TableCell className="p-3">
                          <span className="font-text-text-5-reguler font-[number:var(--text-text-5-reguler-font-weight)] text-[#121212] text-[length:var(--text-text-5-reguler-font-size)] tracking-[var(--text-text-5-reguler-letter-spacing)] leading-[var(--text-text-5-reguler-line-height)] [font-style:var(--text-text-5-reguler-font-style)]">
                            {booking.bookingType}
                          </span>
                        </TableCell>
                        <TableCell className="p-3">
                          <span className="font-text-text-5-reguler font-[number:var(--text-text-5-reguler-font-weight)] text-[#121212] text-[length:var(--text-text-5-reguler-font-size)] tracking-[var(--text-text-5-reguler-letter-spacing)] leading-[var(--text-text-5-reguler-line-height)] [font-style:var(--text-text-5-reguler-font-style)]">
                            {booking.style}
                          </span>
                        </TableCell>
                        <TableCell className="p-3">
                          <span className="mt-[-1.20px] font-text-text-5-reguler font-[number:var(--text-text-5-reguler-font-weight)] text-[#121212] text-[length:var(--text-text-5-reguler-font-size)] tracking-[var(--text-text-5-reguler-letter-spacing)] leading-[var(--text-text-5-reguler-line-height)] [font-style:var(--text-text-5-reguler-font-style)] whitespace-pre-line">
                            {booking.dateTime}
                          </span>
                        </TableCell>
                        <TableCell className="p-3">
                          <Badge
                            className={`rounded-[999px] px-3 py-1 ${booking.statusColor}`}
                          >
                            <span className="mt-[-1.00px] font-text-text-6-medium font-[number:var(--text-text-6-medium-font-weight)] text-[length:var(--text-text-6-medium-font-size)] text-center tracking-[var(--text-text-6-medium-letter-spacing)] leading-[var(--text-text-6-medium-line-height)] whitespace-nowrap [font-style:var(--text-text-6-medium-font-style)]">
                              {booking.status}
                            </span>
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-start gap-5 p-5 self-stretch w-full bg-white rounded-[20px] border-0">
            <CardContent className="p-0 w-full space-y-5">
              <div className="flex items-center justify-between self-stretch w-full">
                <h3 className="font-heading-h6-semibold font-[number:var(--heading-h6-semibold-font-weight)] text-[#121212] text-[length:var(--heading-h6-semibold-font-size)] tracking-[var(--heading-h6-semibold-letter-spacing)] leading-[var(--heading-h6-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-h6-semibold-font-style)]">
                  Upcoming Appointments
                </h3>

                <div className="inline-flex items-center justify-center gap-3">
                  <Button
                    variant="outline"
                    className="h-9 px-3 py-2 bg-white overflow-hidden border border-solid border-[#e7e7e7] gap-2 rounded-xl"
                  >
                    <CalendarIcon className="w-6 h-6 mt-[-2.00px] mb-[-2.00px]" />
                    <span className="font-semibold text-sm [font-family:'Urbanist',Helvetica] text-[#121212] tracking-[0] leading-[16.8px] whitespace-nowrap">
                      31 December 2025
                    </span>
                    <ChevronDownIcon className="w-4 h-4" />
                  </Button>

                  <img alt="Cta button" src="/cta-button.svg" />
                </div>
              </div>

              <div
                className="flex flex-col h-[251px] items-start p-4 self-stretch w-full bg-white rounded-xl overflow-hidden
 border border-solid border-[#e7e7e7]"
              >
                <div className="flex flex-col items-start gap-3 flex-1 self-stretch w-full">
                  {upcomingAppointmentsData.map((appointment, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 self-stretch w-full bg-[#f7f7f7] rounded-xl"
                    >
                      <div className="inline-flex items-center gap-3">
                        {appointment.icon.startsWith("/") ? (
                          <img
                            className="w-10 h-10 mb-[-1.50px] ml-[-2.00px]"
                            alt="Icon"
                            src={appointment.icon}
                          />
                        ) : (
                          <div className="flex flex-col w-9 h-9 items-center justify-center gap-2 bg-greyscale-0 rounded-lg shadow-[0px_1px_2px_#e4e5e73d]">
                            <div className="relative w-4 h-4">
                              <div className="absolute top-[calc(50.00%_-_8px)] left-[calc(50.00%_-_6px)] font-text-text-5-reguler font-[number:var(--text-text-5-reguler-font-weight)] text-[#121212] text-[length:var(--text-text-5-reguler-font-size)] tracking-[var(--text-text-5-reguler-letter-spacing)] leading-[var(--text-text-5-reguler-line-height)] whitespace-nowrap [font-style:var(--text-text-5-reguler-font-style)]">
                                {appointment.icon}
                              </div>
                              <img
                                className="absolute top-[calc(50.00%_-_8px)] left-[calc(50.00%_-_8px)] w-4 h-4"
                                alt="Image"
                                src={index === 0 ? "/--.png" : "/---1.png"}
                              />
                            </div>
                          </div>
                        )}

                        <div className="inline-flex flex-col items-start justify-center gap-1">
                          <div className="mt-[-1.00px] font-body-body-sm font-[number:var(--body-body-sm-font-weight)] text-greyscale-900 text-[length:var(--body-body-sm-font-size)] tracking-[var(--body-body-sm-letter-spacing)] leading-[var(--body-body-sm-line-height)] whitespace-nowrap [font-style:var(--body-body-sm-font-style)]">
                            {appointment.title}
                          </div>
                          <div className="font-body-body-xs font-[number:var(--body-body-xs-font-weight)] text-[#888888] text-[length:var(--body-body-xs-font-size)] tracking-[var(--body-body-xs-letter-spacing)] leading-[var(--body-body-xs-line-height)] whitespace-nowrap [font-style:var(--body-body-xs-font-style)]">
                            {appointment.time}
                          </div>
                        </div>
                      </div>

                      <MoreVerticalIcon className="w-5 h-5" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1 overflow-hidden flex flex-col items-start gap-5 p-5 self-stretch w-full bg-white rounded-[20px] border-0">
            <CardContent className="p-0 w-full flex flex-col gap-5 flex-1">
              <div className="flex items-center justify-between self-stretch w-full">
                <h3 className="font-heading-h6-semibold font-[number:var(--heading-h6-semibold-font-weight)] text-[#121212] text-[length:var(--heading-h6-semibold-font-size)] tracking-[var(--heading-h6-semibold-letter-spacing)] leading-[var(--heading-h6-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-h6-semibold-font-style)]">
                  Inventory
                </h3>

                <div className="inline-flex items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="h-9 gap-2 px-3 py-2 bg-white rounded-xl border border-solid border-[#e7e7e7] w-auto">
                      <SelectValue>
                        <span className="font-button-button-small font-[number:var(--button-button-small-font-weight)] text-[#121212] text-[length:var(--button-button-small-font-size)] tracking-[var(--button-button-small-letter-spacing)] leading-[var(--button-button-small-line-height)] [font-style:var(--button-button-small-font-style)]">
                          All Status
                        </span>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                    </SelectContent>
                  </Select>

                  <img alt="Cta button" src="/cta-button.svg" />
                </div>
              </div>

              <div className="flex-1 bg-white rounded-xl overflow-hidden border border-solid border-[#e7e7e7] flex self-stretch w-full">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#f7f7f7] hover:bg-[#f7f7f7]">
                      <TableHead className="h-12 p-3 font-text-text-4-semibold font-[number:var(--text-text-4-semibold-font-weight)] text-[#121212] text-[length:var(--text-text-4-semibold-font-size)] tracking-[var(--text-text-4-semibold-letter-spacing)] leading-[var(--text-text-4-semibold-line-height)] [font-style:var(--text-text-4-semibold-font-style)]">
                        Artist Name
                      </TableHead>
                      <TableHead className="h-12 p-3 font-text-text-4-semibold font-[number:var(--text-text-4-semibold-font-weight)] text-[#121212] text-[length:var(--text-text-4-semibold-font-size)] tracking-[var(--text-text-4-semibold-letter-spacing)] leading-[var(--text-text-4-semibold-line-height)] [font-style:var(--text-text-4-semibold-font-style)]">
                        Item
                      </TableHead>
                      <TableHead className="h-12 p-3 font-text-text-4-semibold font-[number:var(--text-text-4-semibold-font-weight)] text-[#121212] text-[length:var(--text-text-4-semibold-font-size)] tracking-[var(--text-text-4-semibold-letter-spacing)] leading-[var(--text-text-4-semibold-line-height)] [font-style:var(--text-text-4-semibold-font-style)]">
                        Quantity
                      </TableHead>
                      <TableHead className="h-12 p-3 font-text-text-4-semibold font-[number:var(--text-text-4-semibold-font-weight)] text-[#121212] text-[length:var(--text-text-4-semibold-font-size)] tracking-[var(--text-text-4-semibold-letter-spacing)] leading-[var(--text-text-4-semibold-line-height)] [font-style:var(--text-text-4-semibold-font-style)]">
                        Threshold
                      </TableHead>
                      <TableHead className="h-12 p-3 font-text-text-4-semibold font-[number:var(--text-text-4-semibold-font-weight)] text-[#121212] text-[length:var(--text-text-4-semibold-font-size)] tracking-[var(--text-text-4-semibold-letter-spacing)] leading-[var(--text-text-4-semibold-line-height)] [font-style:var(--text-text-4-semibold-font-style)]">
                        Vendor
                      </TableHead>
                      <TableHead className="h-12 p-3 font-text-text-4-semibold font-[number:var(--text-text-4-semibold-font-weight)] text-[#121212] text-[length:var(--text-text-4-semibold-font-size)] tracking-[var(--text-text-4-semibold-letter-spacing)] leading-[var(--text-text-4-semibold-line-height)] [font-style:var(--text-text-4-semibold-font-style)]">
                        Last Used
                      </TableHead>
                      <TableHead className="h-12 p-3 font-text-text-4-semibold font-[number:var(--text-text-4-semibold-font-weight)] text-[#121212] text-[length:var(--text-text-4-semibold-font-size)] tracking-[var(--text-text-4-semibold-letter-spacing)] leading-[var(--text-text-4-semibold-line-height)] [font-style:var(--text-text-4-semibold-font-style)]">
                        Status
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inventoryData.map((item, index) => (
                      <TableRow
                        key={index}
                        className={
                          index === 1 ? "bg-[#f7f7f7] hover:bg-[#f7f7f7]" : ""
                        }
                      >
                        <TableCell className="p-3">
                          <div className="flex items-center gap-2">
                            <Avatar className="w-[26px] h-[26px] rounded-[74.5px] border border-solid border-[#dbdbdb]">
                              <AvatarImage src={item.artistAvatar} />
                              <AvatarFallback>
                                {item.artistName[0]}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-text-text-5-medium font-[number:var(--text-text-5-medium-font-weight)] text-[#121212] text-[length:var(--text-text-5-medium-font-size)] tracking-[var(--text-text-5-medium-letter-spacing)] leading-[var(--text-text-5-medium-line-height)] [font-style:var(--text-text-5-medium-font-style)]">
                              {item.artistName}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="p-3">
                          <span className="font-text-text-5-medium font-[number:var(--text-text-5-medium-font-weight)] text-[#121212] text-[length:var(--text-text-5-medium-font-size)] tracking-[var(--text-text-5-medium-letter-spacing)] leading-[var(--text-text-5-medium-line-height)] [font-style:var(--text-text-5-medium-font-style)]">
                            {item.item}
                          </span>
                        </TableCell>
                        <TableCell className="p-3">
                          <span className="font-text-text-5-reguler font-[number:var(--text-text-5-reguler-font-weight)] text-[#121212] text-[length:var(--text-text-5-reguler-font-size)] tracking-[var(--text-text-5-reguler-letter-spacing)] leading-[var(--text-text-5-reguler-line-height)] [font-style:var(--text-text-5-reguler-font-style)]">
                            {item.quantity}
                          </span>
                        </TableCell>
                        <TableCell className="p-3">
                          <span className="font-text-text-5-reguler font-[number:var(--text-text-5-reguler-font-weight)] text-[#121212] text-[length:var(--text-text-5-reguler-font-size)] tracking-[var(--text-text-5-reguler-letter-spacing)] leading-[var(--text-text-5-reguler-line-height)] [font-style:var(--text-text-5-reguler-font-style)]">
                            {item.threshold}
                          </span>
                        </TableCell>
                        <TableCell className="p-3">
                          <span className="font-text-text-5-reguler font-[number:var(--text-text-5-reguler-font-weight)] text-[#121212] text-[length:var(--text-text-5-reguler-font-size)] tracking-[var(--text-text-5-reguler-letter-spacing)] leading-[var(--text-text-5-reguler-line-height)] [font-style:var(--text-text-5-reguler-font-style)]">
                            {item.vendor}
                          </span>
                        </TableCell>
                        <TableCell className="p-3">
                          <span className="font-text-text-5-reguler font-[number:var(--text-text-5-reguler-font-weight)] text-[#121212] text-[length:var(--text-text-5-reguler-font-size)] tracking-[var(--text-text-5-reguler-letter-spacing)] leading-[var(--text-text-5-reguler-line-height)] [font-style:var(--text-text-5-reguler-font-style)]">
                            {item.lastUsed}
                          </span>
                        </TableCell>
                        <TableCell className="p-3">
                          <Badge
                            className={`rounded border border-solid px-3 py-1 ${item.statusColor}`}
                          >
                            <span className="mt-[-1.00px] font-text-text-6-medium font-[number:var(--text-text-6-medium-font-weight)] text-[length:var(--text-text-6-medium-font-size)] text-center tracking-[var(--text-text-6-medium-letter-spacing)] leading-[var(--text-text-6-medium-line-height)] whitespace-nowrap [font-style:var(--text-text-6-medium-font-style)]">
                              {item.status}
                            </span>
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
