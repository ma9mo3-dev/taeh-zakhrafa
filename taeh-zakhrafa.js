// api/taeh-zakhrafa.js

import { applyAllFonts } from '../fonts.js'

export default function handler(req, res) {
  const { q } = req.query

  if (!q) {
    return res.status(400).json({
      success: false,
      message: 'أدخل نص في ?q= عشان نزخرفه',
      example: '/api/taeh-zakhrafa?q=amin'
    })
  }

  const text = q.trim()

  const styles = applyAllFonts(text)

  res.setHeader('Content-Type', 'application/json')
  res.status(200).json({
    input: text,
    success: true,
    count: Object.keys(styles).length,
    styles
  })
}
