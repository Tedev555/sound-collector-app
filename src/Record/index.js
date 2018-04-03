import React, {Component} from 'react'

import SoundRecord from './viewComponents/SoundRecord'

export default class RecordPage extends Component {

	render() {
		return (
			<div>
				<div className="justify-content-center row" style={{marginBottom: 30 + 'px'}}>
					<h2>Lao Speech Recording</h2>
				</div>

				<div>
					<div className="row justify-content-center">ກົດປຸ່ມ "ເລີ່ມ" ເພື່ອເລີ່ມການບັນທຶກ.</div>
					<div className="row justify-content-center">ອ່ານເທື່ອລະຄຳຕາມທີ່ສະແດງອອກມາຢູ່ຂ້າງລຸ່ມ.</div>
					<div className="row justify-content-center">ກົດ "ຢຸດ" ເພື່ອຢຸດການບັນທຶກຊົ່ວຄາວ.</div>
					<div className="row justify-content-center">ເມື່ອອັດສຽງໝົດແລ້ວ ກະລຸນາກົດປຸ່ມ "ສຳເລັດ" ເພື່ອສຳເລັດການບັນທຶກສຽງ.</div>
					<div className="row justify-content-center">ທ່ານສາມາດກວດສອບການບັນທຶກແຕ່ລະຄຳຂອງທ່ານ ແລະ ສາມາດລຶບ ແລ້ວບັນທຶກໃໝ່.</div>
				</div>			

				<div className="d-flex row" style={{marginBottom: 100 + 'px'}}>
					<div className="col-lg hidden-md-down"></div>
					<div className="col-lg-7">
						<div style={{ marginBottom: 50 + 'px' }}>
							<hr/>
						</div>
						<SoundRecord />
					</div>
					<div className="col-lg hidden-md-down"></div>
				</div>
			</div>
		)
	}
}