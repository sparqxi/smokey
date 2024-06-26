import { Grid, Typography } from "@mui/material"
import MotionWrapper from "../motion-wrapper"
import Meme from '../../assets/branding/smokey1nobg.png'

type Props = {}

const MemeSection = (_props: Props) => {
  return (
    <MotionWrapper position={true}>
        <Grid container justifyContent={"center"} mt={4}>
        <Typography variant="h3" mb={4}>Smokey Memes</Typography>
      </Grid>
      <img src={Meme} alt="illu" width={600} />
    </MotionWrapper>
  )
}

export default MemeSection