import { logger } from '../../services/logger.service.mjs'
import { activityService } from './activity.service.mjs'

export async function getActivities(req, res) {
  try {
    const boardId = req.params.boardId
    const activities = await activityService.query({ boardId })
    res.send(activities)
  } catch (err) {
    logger.error('Cannot get activities', err)
    res.status(400).send({ err: 'Failed to get activities' })
  }
}

export async function deleteActivity(req, res) {
  try {
    const deletedCount = await activityService.remove(req.params.id)
    if (deletedCount === 1) {
      res.send({ msg: 'Deleted successfully' })
    } else {
      res.status(400).send({ err: 'Cannot remove activity' })
    }
  } catch (err) {
    logger.error('Failed to delete activity', err)
    res.status(400).send({ err: 'Failed to delete activity' })
  }
}

export async function addActivity(req, res) {
  const { loggedinUser } = req

  try {
    let activity = req.body
    activity.byMemberId = loggedinUser._id
    activity = await activityService.add(activity)
    res.send(activity)
  } catch (err) {
    logger.error('Failed to add activity', err)
    res.status(400).send({ err: 'Failed to add activity' })
  }
}
