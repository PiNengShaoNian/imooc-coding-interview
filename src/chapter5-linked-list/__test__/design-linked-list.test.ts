import { MyLinkedList } from '../design-linked-list'
const { LinkedList } = require('dstructures.js')

describe('MyLinkedList', () => {
  test('addTail', () => {
    const list = new MyLinkedList()
    list.addAtTail(1)
    list.addAtTail(2)
    list.addAtTail(3)

    expect(list.size()).toBe(3)
    expect([...list]).toEqual([1, 2, 3])

    expect(list.addAtTail(5))
    expect(list.addAtTail(6))
    expect([...list]).toEqual([1, 2, 3, 5, 6])

    expect(list.get(5)).toBe(-1)
    expect(list.get(4)).toBe(6)
    expect(list.get(1)).toBe(2)
    expect(list.get(0)).toBe(1)
  })

  test('addAtHead', () => {
    const list = new MyLinkedList()
    list.addAtTail(1)
    list.addAtTail(2)
    list.addAtTail(3)
    list.addAtHead(3)
    list.addAtHead(2)
    list.addAtHead(1)

    expect([...list]).toEqual([1, 2, 3, 1, 2, 3])
    expect(list.size()).toBe(6)
    list.addAtHead(-1)
    expect(list.get(0)).toBe(-1)
    expect(list.get(1)).toBe(1)
  })

  test('addAtIndex', () => {
    const list = new MyLinkedList()
    list.addAtHead(3)
    list.addAtHead(2)
    list.addAtHead(1)
    list.addAtTail(4)
    list.addAtTail(5)
    list.addAtTail(6)

    expect(list.size()).toBe(6)

    list.addAtIndex(6, 7)
    expect(list.size()).toBe(7)
    expect(list.get(6)).toBe(7)

    expect([...list]).toEqual([1, 2, 3, 4, 5, 6, 7])

    list.addAtIndex(0, 0)
    expect(list.size()).toBe(8)
    expect(list.get(0)).toBe(0)

    expect(list.get(3)).toBe(3)
    expect(list.get(7)).toBe(7)
    expect(list.get(8)).toBe(-1)

    list.addAtIndex(3, 2.5)
    list.addAtIndex(3, 2.2)

    expect(list.size()).toBe(10)

    expect(list.get(3)).toBe(2.2)
    expect(list.get(4)).toBe(2.5)
    expect(list.get(5)).toBe(3)
    expect(list.get(9)).toBe(7)
  })

  test('deleteAtIndex', () => {
    const list = new MyLinkedList()
    list.addAtTail(1)
    list.addAtTail(2)
    list.addAtTail(3)
    list.addAtTail(4)
    list.addAtTail(5)

    expect(list.size()).toBe(5)
    list.deleteAtIndex(0)
    expect(list.size()).toBe(4)
    expect(list.get(0)).toBe(2)

    list.deleteAtIndex(3)
    expect(list.size()).toBe(3)
    expect(list.get(2)).toBe(4)

    list.deleteAtIndex(1)
    expect(list.size()).toBe(2)
    expect(list.get(1)).toBe(4)

    list.deleteAtIndex(3)
    list.deleteAtIndex(0)
    list.deleteAtIndex(0)
    list.deleteAtIndex(0)

    expect(list.size()).toBe(0)

    list.addAtTail(1)
    list.addAtTail(2)
    list.addAtTail(3)

    expect([...list]).toEqual([1, 2, 3])
    list.deleteAtIndex(1)
    list.addAtTail(4)
  })

  test('operations', () => {
    const operations = [
      'MyLinkedList',
      'addAtHead',
      'addAtTail',
      'addAtTail',
      'get',
      'get',
      'addAtTail',
      'addAtIndex',
      'addAtHead',
      'addAtHead',
      'addAtTail',
      'addAtTail',
      'addAtTail',
      'addAtTail',
      'get',
      'addAtHead',
      'addAtHead',
      'addAtIndex',
      'addAtIndex',
      'addAtHead',
      'addAtTail',
      'deleteAtIndex',
      'addAtHead',
      'addAtHead',
      'addAtIndex',
      'addAtTail',
      'get',
      'addAtIndex',
      'addAtTail',
      'addAtHead',
      'addAtHead',
      'addAtIndex',
      'addAtTail',
      'addAtHead',
      'addAtHead',
      'get',
      'deleteAtIndex',
      'addAtTail',
      'addAtTail',
      'addAtHead',
      'addAtTail',
      'get',
      'deleteAtIndex',
      'addAtTail',
      'addAtHead',
      'addAtTail',
      'deleteAtIndex',
      'addAtTail',
      'deleteAtIndex',
      'addAtIndex',
      'deleteAtIndex',
      'addAtTail',
      'addAtHead',
      'addAtIndex',
      'addAtHead',
      'addAtHead',
      'get',
      'addAtHead',
      'get',
      'addAtHead',
      'deleteAtIndex',
      'get',
      'addAtHead',
      'addAtTail',
      'get',
      'addAtHead',
      'get',
      'addAtTail',
      'get',
      'addAtTail',
      'addAtHead',
      'addAtIndex',
      'addAtIndex',
      'addAtHead',
      'addAtHead',
      'deleteAtIndex',
      'get',
      'addAtHead',
      'addAtIndex',
      'addAtTail',
      'get',
      'addAtIndex',
      'get',
      'addAtIndex',
      'get',
      'addAtIndex',
      'addAtIndex',
      'addAtHead',
      'addAtHead',
      'addAtTail',
      'addAtIndex',
      'get',
      'addAtHead',
      'addAtTail',
      'addAtTail',
      'addAtHead',
      'get',
      'addAtTail',
      'addAtHead',
      'addAtTail',
      'get',
      'addAtIndex',
    ]
    const params = [
      [],
      [84],
      [2],
      [39],
      [3],
      [1],
      [42],
      [1, 80],
      [14],
      [1],
      [53],
      [98],
      [19],
      [12],
      [2],
      [16],
      [33],
      [4, 17],
      [6, 8],
      [37],
      [43],
      [11],
      [80],
      [31],
      [13, 23],
      [17],
      [4],
      [10, 0],
      [21],
      [73],
      [22],
      [24, 37],
      [14],
      [97],
      [8],
      [6],
      [17],
      [50],
      [28],
      [76],
      [79],
      [18],
      [30],
      [5],
      [9],
      [83],
      [3],
      [40],
      [26],
      [20, 90],
      [30],
      [40],
      [56],
      [15, 23],
      [51],
      [21],
      [26],
      [83],
      [30],
      [12],
      [8],
      [4],
      [20],
      [45],
      [10],
      [56],
      [18],
      [33],
      [2],
      [70],
      [57],
      [31, 24],
      [16, 92],
      [40],
      [23],
      [26],
      [1],
      [92],
      [3, 78],
      [42],
      [18],
      [39, 9],
      [13],
      [33, 17],
      [51],
      [18, 95],
      [18, 33],
      [80],
      [21],
      [7],
      [17, 46],
      [33],
      [60],
      [26],
      [4],
      [9],
      [45],
      [38],
      [95],
      [78],
      [54],
      [42, 86],
    ]

    const dlist = new LinkedList()
    const list = new MyLinkedList()
    for (let i = 1; i < operations.length; ++i) {
      //   console.log({
      //     index: i,
      //     operation: operations[i],
      //     params: params[i],
      //   })
      if (operations[i] === 'addAtHead') {
        dlist.addFirst(params[i][0])
      } else if (operations[i] === 'addAtTail') {
        dlist.addLast(params[i][0])
      } else if (operations[i] === 'get') {
        expect(dlist.get(params[i][0]) ?? -1).toBe(list.get(params[i][0]))
      } else if (operations[i] === 'addAtIndex') {
        dlist.add(params[i][0], params[i][1])
      } else if (operations[i] === 'deleteAtIndex') {
        dlist.remove(params[i][0])
      }

      ;(list as any)[operations[i]](...params[i])

    //   console.log({
    //     index: i,
    //     operation: operations[i],
    //     params: params[i],
    //     received: [...list],
    //     expected: [...dlist],
    //   })
      expect(dlist.getFirst()).toBe(list.first()?.val ?? null)
      expect(dlist.getLast()).toBe(list.last()?.val ?? null)
      expect([...list]).toEqual([...dlist])
    }
  })
})
