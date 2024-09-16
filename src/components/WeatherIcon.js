function WeatherIcons({iconNumber,summary}) {
  return (
    <div>
      <img
            src={`${process.env.PUBLIC_URL}/dist/weather_icons/set04/big/${iconNumber}.png`}
            alt={summary}
            draggable={false}
          />
    </div>
  )
}

export default WeatherIcons
