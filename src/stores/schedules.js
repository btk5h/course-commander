import { writable, derived } from "svelte/store"

export const dummySchedule = {
  title: "",
  primaryMeetings: [
    {
      location: "",
      days: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
      },
      startTime: "",
      duration: ""
    }
  ],
  secondaryMeetings: [],
  dummy: true
}

export const schedules = writable([])

export const serializedSchedules = derived(schedules, $schedules =>
  JSON.stringify($schedules)
)

export function clearSchedules() {
  schedules.set([])
}
