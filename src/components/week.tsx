import { Grid, Text, useMultiStyleConfig } from '@chakra-ui/react'
import { addDays, format, startOfWeek } from 'date-fns'

function getWeek() {
  const start = startOfWeek(new Date())
  return [...Array(7).keys()].map(i => format(addDays(start, i), 'E'))
}

export function CalendarWeek() {
  const week = getWeek()
  const styles = useMultiStyleConfig('CalendarMonth', {})

  return (
    <Grid sx={styles.week}>
      {week.map(day => (
        <Text key={day} sx={styles.weekday}>
          {day}
        </Text>
      ))}
    </Grid>
  )
}