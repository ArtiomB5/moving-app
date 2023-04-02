import { Checkbox, Input, Label, Select } from "@rebass/forms";
import { ChangeEvent, FC, useState } from "react";
import { Button } from "rebass";

const cars = [4.5, 5.5, 6, 8, 10, 11, 20]

interface IOrderingProps {
  onSubmitHandler: () => void,
  points: number[][],
  distance: number
}

export const Ordering: FC<IOrderingProps> = ({ onSubmitHandler, points, distance }) => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [loading, setLoading] = useState('0')
  const [packing, setPacking] = useState('0')
  const [carLoadCapacity, setCarLoadCapacity] = useState(cars[2])

  const submitHandler = () => {
    console.log({
      date,
      time,
      loading,
      packing,
      carLoadCapacity,
      points,
      distance
    })
  }

  return (
    <>
      <div>
        <Label htmlFor='name'>
          Date:
          <Input type="date" placeholder={'Choose Moving Date'} value={date} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setDate(e.currentTarget.value)
          }} />
        </Label>
        <Label htmlFor='name'>
          Time:
          <Input type="time" placeholder={'Choose Moving Time'} value={time} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTime(e.currentTarget.value)
          }} />
        </Label>
        <Label htmlFor='carLoadCapacity'>
          Car Load Capacity, tonnes:
          <Select
            id='carLoadCapacity'
            name='carLoadCapacity'
            defaultValue={carLoadCapacity}
            onChange={e => {
              setCarLoadCapacity(Number(e.currentTarget.value))
            }}
          >
            {cars.map(car => <option key={car}>{car}</option>)}
          </Select>
        </Label>
        <Label>
          Loading:
          <Checkbox
            type={'checkbox'}
            placeholder={'loading checkbox'}
            onChange={(e) => setLoading(e.currentTarget.value)}
          />
        </Label>

        <Label width={[1]}>
          Packing:
          <Checkbox
            type={'checkbox'}
            placeholder={'packing checkbox'}
            onChange={(e) => setPacking(e.currentTarget.value)}
          />
        </Label>
        <Button onClick={submitHandler}>
          Submit Order
        </Button>
      </div >
      {/* <Flex flexWrap='wrap' mx={-2}>
        <Box px={2} py={2} width={1 / 2}>
          <Label htmlFor='name'>Date & Time</Label>
          <Input type="date" placeholder={'Choose Moving Date'} value={date} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setDate(e.currentTarget.value)
            console.log('date', e)
            console.log('date', e)

          }} />
          <Input type="time" placeholder={'Choose Moving Time'} value={time} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTime(e.currentTarget.value)
            console.log('time', e)
          }} />
        </Box>
        <Box px={2} py={2} width={1 / 2}>
          <Label htmlFor='carLoadCapacity'>Car Load Capacity, tonnes</Label>
          <Select
            id='carLoadCapacity'
            name='carLoadCapacity'
            defaultValue={carLoadCapacity}
            onChange={e => {
              setCarLoadCapacity(Number(e.currentTarget.value))
            }}
          >
            {cars.map(car => <option key={car}>{car}</option>)}
          </Select>
        </Box>
        <Box px={2} py={2} width={1 / 2}>
          <Label width={[1 / 2, 1 / 4]} p={2}>
            <Checkbox
              type={'checkbox'}
              placeholder={'loading checkbox'}
              onChange={(e) => setLoading(e.currentTarget.value)}
            />
            Loading
          </Label>

          <Label width={[1 / 2, 1 / 4]} p={2}>
            <Checkbox
              type={'checkbox'}
              placeholder={'packing checkbox'}
              onChange={(e) => setPacking(e.currentTarget.value)}
            />
            Packing
          </Label>
        </Box>
        <Box px={2} py={2} width={1 / 2}>
          <Button onClick={submitHandler}>
            Submit Order
          </Button>
        </Box>
      </Flex> */}
      {/* <Box
        as='form'
        onSubmit={e => e.preventDefault()}
        py={3}>
        <Flex mx={-2} mb={3}>
          <Box width={1 / 2} px={2}>
            <Label htmlFor='name'>Name</Label>
            <Input type="date" placeholder={'Choose Moving Date'} value={date} onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setDate(e.currentTarget.value)
              console.log('date', e)
              console.log('date', e)

            }} />
            <Input type="time" placeholder={'Choose Moving Time'} value={time} onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setTime(e.currentTarget.value)
              console.log('time', e)
            }} />
          </Box>
          <Box width={1 / 2} px={2}>
            <Label htmlFor='carLoadCapacity'>Car Load Capacity, tonnes</Label>
            <Select
              id='carLoadCapacity'
              name='carLoadCapacity'
              defaultValue={carLoadCapacity}
              onChange={e => {
                setCarLoadCapacity(Number(e.currentTarget.value))
              }}
            >
              {cars.map(car => <option key={car}>{car}</option>)}
            </Select>
          </Box>
        </Flex>
        <Flex mx={-2} flexWrap='wrap'>
          <Label width={[1 / 2, 1 / 4]} p={2}>
            <Checkbox
              type={'checkbox'}
              placeholder={'loading checkbox'}
              onChange={(e) => setLoading(e.currentTarget.value)}
            />
              Loading
          </Label>

          <Label width={[1 / 2, 1 / 4]} p={2}>
            <Checkbox
              type={'checkbox'}
              placeholder={'packing checkbox'}
              onChange={(e) => setPacking(e.currentTarget.value)}
            />
            Packing
          </Label>
          <Box px={2} ml='auto'>
            <Button onClick={submitHandler}>
              Submit Order
            </Button>
          </Box>
        </Flex>
      </Box> */}
    </>
  );
}
